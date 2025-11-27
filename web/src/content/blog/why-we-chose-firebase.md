---
title: "Why we chose Firebase for JustRed"
description: "Building a privacy-first email tracker requires a robust infrastructure. Here is why we bet on Firebase."
pubDate: "2025-11-24"
heroImage: "https://placehold.co/1200x600/1a1a1a/ff4444?text=Firebase+%2B+JustRed"
---

When we started building **JustRed**, we had a clear goal: to create a privacy-first, open-source alternative to the existing email tracking extensions. We wanted to give users control over their data without compromising on performance or reliability.

To achieve this, we needed a backend infrastructure that was scalable, secure, and cost-effective. After evaluating several options, including AWS, Vercel, and self-hosted solutions, we decided to go with **Google Firebase**.

Here is why.

## 1. The Price Factor

Let's be honest: for an indie project or a startup, cost is a major deciding factor. We wanted to keep JustRed free and open source for as long as possible.

Firebase's **Spark Plan** (free tier) is incredibly generous. It allows us to:
- Host our web assets via **Firebase Hosting**.
- Store user preferences and tracking data in **Firestore**.
- Authenticate users with **Firebase Auth**.
- Run backend logic with **Cloud Functions**.

All of this comes with generous limits that are more than enough for our current user base. Compared to spinning up EC2 instances on AWS or managing a complex Kubernetes cluster, Firebase allows us to focus on building features rather than managing infrastructure bills.

## 2. Seamless Integration with Google Ecosystem

JustRed is a Chrome Extension that lives inside **Gmail**. Our users are already in the Google ecosystem.

Firebase, being a Google product, offers best-in-class integration with other Google services.
- **Authentication**: Users can sign in with their existing Google accounts with a single click. No need to remember new passwords.
- **Security**: Firebase handles the complexity of secure authentication and data protection, which is critical when dealing with email tracking data.
- **Performance**: Firestore's real-time capabilities mean that when an email is opened, the notification is delivered instantly.

## 3. Developer Experience

As a small team, we value speed. Firebase provides a unified SDK that handles everything from the database to the hosting. This "backend-as-a-service" model allowed us to prototype JustRed in days, not weeks.

We don't have to worry about database migrations, server maintenance, or scaling issues. Firebase handles it all automatically.

## Conclusion

Choosing Firebase was a strategic decision for JustRed. It aligns with our mission to provide a secure, reliable, and free tool for everyone. It allows us to leverage Google's powerful infrastructure while keeping our costs near zero.

If you haven't tried JustRed yet, give it a spin. It's open source, privacy-first, and built on the solid foundation of Firebase.

[**Get JustRed for Chrome**](https://github.com/justred-tech/justred/)
