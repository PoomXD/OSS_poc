import { google } from "googleapis"

export async function GET(req: Request) {
  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  )

  auth.setCredentials({
    access_token: "USER_ACCESS_TOKEN"
  })

  const calendar = google.calendar({ version: "v3", auth })

  const events = await calendar.events.list({
    calendarId: "primary",
    maxResults: 10,
  })

  return Response.json(events.data.items)
}