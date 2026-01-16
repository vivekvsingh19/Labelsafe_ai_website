# Easy Waitlist Setup (Formspree)

Since the Google Script method is complex, use **Formspree** instead. It's free and works instantly.

1.  Go to **[Formspree.io](https://formspree.io/register)** and sign up.
2.  Click **+ New Form**.
3.  Name it "Waitlist".
4.  It will give you an **Endpoint URL** (looks like `https://formspree.io/f/xzbowpgr`).
5.  Copy that URL.
6.  Open `.env.local` in this project and paste it:
    ```bash
    VITE_WAITLIST_URL=https://formspree.io/f/your-id-here
    ```
7.  Restart your server (`npm run dev`).

**Done!**
- Emails will go to your formspree dashboard.
- You can enable the "Google Sheets" plugin in Formspree to sync them automatically to a sheet.
