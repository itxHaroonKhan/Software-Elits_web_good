# Website Chat Feature — Implementation Plan

Ye plan is website (`my-app` — Next.js 16 App Router, Tailwind, no auth/DB abhi tak) me chat add karne ke liye hai. Neeche teenon options ka kaam, working, aur examples diye hain — jo bhi option pasand aaye us par implementation start kar sakte hain.

---

## Abhi ka setup (jo already hai)

- **Framework:** Next.js 16 (App Router), React 19, Tailwind v4
- **Email/leads:** `nodemailer` + `resend` — already `app/api/contact`, `app/api/careers`, `app/api/newsletter` routes hain
- **Koi AI SDK, auth, ya database nahi hai abhi** — sab kuch is se scratch add hoga
- **Deployment:** Vercel-friendly setup (recommended: AI Gateway use karein taake provider switch karna asaan rahe)
- **Actual hosting: cPanel (Node.js Selector available)** — is wajah se **Option C (Hybrid)** recommend hai. Neeche "cPanel Deployment Notes" section dekhein.

---

## cPanel Deployment Notes (Node.js Selector confirmed available)

- Next.js `next build` + `next start` cPanel ke Node.js Selector (Phusion Passenger) par normal Node app ki tarah chalta hai — koi extra setup nahi chahiye.
- **Option A / C (AI chatbot streaming)** — `streamText` ka response plain HTTP chunked stream hota hai (WebSocket nahi), ye Passenger ke through bina issue ke kaam karta hai. ✅ Safe choice.
- **Option B2 (custom WebSocket live chat)** — shared cPanel hosting me WebSocket upgrade requests aksar proxy nahi hoti jab tak host explicitly enable na kare. ❌ Avoid karein jab tak host confirm na kare.
- **Option B1 (Tawk.to/Crisp jaisa no-code widget)** — hosting type se koi farq nahi padta, kyunke widget apne (third-party) servers se connect hota hai, cPanel sirf script tag serve karta hai. ✅ Hamesha safe.
- **Recommendation for this project: Option C** — AI chatbot (HTTP streaming) + human handoff via existing `app/api/contact` email route. Koi WebSocket, koi extra database, koi extra hosting configuration nahi chahiye.

---

## Option A — AI Chatbot Widget (Recommended)

Ek floating chat bubble (bottom-right, jaisa Intercom/Crisp dikhta hai) jo website ke services, pricing, portfolio, contact process ke baare me visitor ke sawalon ka jawab de — 24/7, bina kisi insaan ke.

### Kaise kaam karega
1. Visitor bottom-right corner me chat icon dabata hai → chat window khulti hai.
2. Visitor sawal type karta hai (e.g. "aap web design kitne me karte ho?").
3. Message client se `app/api/chat/route.ts` (naya API route) ko jata hai.
4. Server par **Vercel AI SDK** (`streamText`) LLM ko call karta hai — model **Vercel AI Gateway** ke through (`"anthropic/claude-sonnet-5"` jaisa string), taake provider switch karna future me asaan ho.
5. System prompt me website ka context diya hota hai: services list, pricing packages, portfolio highlights, contact info — taake bot sirf sahi/relevant jawab de.
6. Response **stream** hoke UI me word-by-word aata hai (jaisa ChatGPT me hota hai).
7. Agar bot confident na ho ya visitor "talk to a human" bole, to ek CTA button dikhaye jo `/contact` page ya existing contact form ki taraf le jaye (jo already hai).

### Naye files jo add hongi
v 
```
app/api/chat/route.ts        → server-side streaming endpoint
components/ChatWidget.tsx    → floating bubble + chat window (client component)
lib/chat-system-prompt.ts    → website context (services/pricing/FAQ) system prompt
```
`app/layout.tsx` me `<ChatWidget />` ek line add karke sab pages par show ho jayega.

### Packages jo install karni hongi
```bash
npm install ai @ai-sdk/react
```
(Provider-specific package ki zaroorat nahi — AI Gateway ke through `"provider/model"` string se direct call hota hai.)

### Example — API route (`app/api/chat/route.ts`)
```ts
import { streamText, convertToModelMessages, type UIMessage } from "ai";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: "anthropic/claude-sonnet-5", // AI Gateway ke through
    system: SYSTEM_PROMPT, // services, pricing, portfolio ka context
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
```

### Example — Client widget (`components/ChatWidget.tsx`)
```tsx
"use client";
import { useChat } from "@ai-sdk/react";

export default function ChatWidget() {
  const { messages, sendMessage, status } = useChat();
  // floating button + open/close state
  // messages.map(...) se chat bubbles render honge
  // input + send button se sendMessage({ text }) call hoga
}
```

### Environment variable
```
AI_GATEWAY_API_KEY=...   (.env.local me — Vercel dashboard se milega)
```

### Kitna kaam / time
- Basic version: ~1 din (widget UI + API route + system prompt)
- Polish (typing indicator, suggested questions, mobile responsive, rate limiting): ~1 din aur

### Fayde
- 24/7 available, koi staffing zaroorat nahi
- Leads capture ho sakti hain (bot end me email/phone maang sakta hai, jo `app/api/contact` route ko hi hit kar de)
- Cost kam — sirf AI Gateway usage-based billing

### Nuqsan
- Complex/negotiation wale sawalon ka jawab insaan jaisa nahi hoga
- Hallucination se bachne ke liye system prompt aur guardrails likhne padenge

---

## Option B — Live Human Chat

Real-time chat jaha visitor directly aap (ya team member) se baat kare.

### Do tareeqe

**B1 — No-code widget (sabse tez, ~30 min)**
Tawk.to, Crisp, ya Tidio jaisi service ka free widget — sirf ek `<script>` tag `app/layout.tsx` me add karna hota hai. Unki dashboard app se aap phone/laptop par reply karte hain.
- Fayda: zero backend kaam, turant live
- Nuqsan: third-party branding/ads (free tier me), data unki service par jata hai

**B2 — Khud ka WebSocket-based system**
Agar full control chahiye (apna data, apna UI):
```
app/api/chat/socket ya Pusher/Ably jaisi realtime service
components/ChatWidget.tsx  → visitor side
app/admin/chat/page.tsx    → aap/team ke reply karne ka dashboard
```
Realtime ke liye database (Postgres/Supabase) aur ek realtime layer (Pusher, Ably, ya Supabase Realtime) chahiye hoga — abhi is project me database nahi hai, to ye setup karna hoga.

### Kitna kaam / time
- B1: 30 minutes
- B2: 3-5 din (DB + realtime + admin dashboard + auth)

### Fayde
- Insaan jaisa, complex/sales sawalon ka behtar jawab
- Trust zyada milta hai (especially high-ticket clients ke liye)

### Nuqsan
- Aap ya team ko hamesha available rehna padega (ya "offline" state dikhani hogi)
- B2 me kaafi zyada development time lagega

---

## Option C — Hybrid (AI + Human Handoff)

Option A ka bot pehle jawab de; jab visitor "human se baat karni hai" bole (ya bot confidence low ho), tab conversation ek human agent ko handoff ho jaye (email notification + Option B1 ka widget khud khul jaye, ya conversation `app/api/contact` route ke zariye lead ban jaye).

### Kaise kaam karega
1. Option A ka poora setup same rahega.
2. System prompt me ek rule: agar user "talk to human", "call me", "pricing negotiate" jaisa kuch bole, bot ek structured signal return kare.
3. Client us signal par ek form dikhaye (naam/email/phone) → `app/api/contact` route ko hit kare (jo already exist karta hai) → aapko email chala jaye.
4. Optional: yehi conversation transcript bhi email me include ho jaye taake context na khoye.

### Kitna kaam / time
- Option A + ~half din extra (handoff logic + form)

### Fayde
- Best of both — AI se 24/7 coverage, high-value leads insaan tak pahunch jate hain
- Existing `app/api/contact` infrastructure reuse hoti hai, naya backend nahi chahiye

---

## Comparison Table

| | Setup Time | Ongoing Cost | Data Control | Best For |
|---|---|---|---|---|
| A — AI Chatbot | ~2 din | AI Gateway usage (low) | Full | 24/7 FAQ, lead qualify |
| B1 — No-code Live Chat | ~30 min | Free–$/mo | Third-party | Turant live chat chahiye |
| B2 — Custom Live Chat | ~3-5 din | Hosting + realtime service | Full | Full custom control |
| C — Hybrid (Recommended) | ~2.5 din | Low (A + existing email) | Full | Best overall — AI + real leads |

---

## Meri Recommendation

**Option C (Hybrid)** — kyunke:
- Existing `app/api/contact` infrastructure already hai, use ho jayegi
- Naya database/auth setup nahi chahiye
- Visitor ko turant jawab milta hai (bounce rate kam hoga)
- High-intent leads (jo pricing/call maang rahe hain) seedha aapke email me aa jayenge

## Agla Qadam

Agar Option C (ya koi bhi) pasand ho to bata dein, main:
1. `ai` aur `@ai-sdk/react` packages install karunga
2. `app/api/chat/route.ts` aur `components/ChatWidget.tsx` banaunga
3. System prompt me aapki actual services/pricing/portfolio ka data daalunga (jo already `app/services`, `app/packages` me hai — same content reuse hoga)
4. `AI_GATEWAY_API_KEY` .env.local me set karne ko bolunga
5. `app/layout.tsx` me widget add karke test karunga

Bas confirm kar dein kaunsa option chahiye — ya agar direct Option C hi shuru karna hai to bol dein, main implementation start kar deta hoon.
