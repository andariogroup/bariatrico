interface AppointmentWidgetProps {
  url?: string;
  title?: string;
}

export function AppointmentWidget({
  url,
  title = "Agenda tu consulta",
}: AppointmentWidgetProps) {
  const calendarUrl = url ?? process.env.NEXT_PUBLIC_CALENDAR_URL ?? "";

  if (!calendarUrl || calendarUrl.includes("tu-usuario")) {
    return (
      <div className="flex min-h-[500px] items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 p-8 text-center">
        <div>
          <p className="text-lg font-medium text-foreground">{title}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Configura <code className="rounded bg-muted px-1">NEXT_PUBLIC_CALENDAR_URL</code> en tu archivo .env con tu enlace de Cal.com o Calendly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
      <iframe
        src={calendarUrl}
        title={title}
        className="min-h-[650px] w-full border-0"
        loading="lazy"
        allow="camera; microphone; fullscreen"
      />
    </div>
  );
}
