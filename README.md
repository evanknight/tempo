# Louie - Strava-Synced Marathon Coach

Louie is a minimal marathon training web application built with Next.js, TypeScript and Supabase. It connects with Strava to automatically log your runs and generates a simple training plan leading up to your marathon.

## Features
- Google login powered by NextAuth and Supabase Auth.
- Connect with Strava to sync activities.
- Onboarding wizard to set race date, goal time and difficulty.
- Dashboard with upcoming workouts and weekly mileage.
- Basic settings page to update your preferences.

## Local Setup
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Create `.env.local`** based on `.env.example` and fill in your credentials.
3. **Run the dev server**
   ```bash
   npm run dev
   ```

## Strava App Setup
1. Create a Strava API application at <https://www.strava.com/settings/api>.
2. Set the Authorization Callback Domain to your Vercel domain or `http://localhost:3000` for local testing.
3. Copy the Client ID and Client Secret into `.env.local`.
4. Enable the `activity:read` and `activity:read_all` scopes.

## Deploying to Vercel
1. Push this repository to GitHub.
2. Import the project in Vercel and set the environment variables from `.env.example`.
3. Deploy!

## Testing
The plan generator has a minimal Jest test. Run:
```bash
npm test
```

---
This project is a minimal starting point and is intentionally simplified for demonstration purposes.
