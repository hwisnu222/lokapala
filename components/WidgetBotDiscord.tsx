import WidgetBot from "@widgetbot/react-embed";
import React from "react";
import Container from "./Container";

export default function WidgetBotDiscord() {
  return (
    <div className="my-2 py-24 part-discord bg-cover">
      <Container>
        <WidgetBot
          className="w-full h-[500px]"
          server={process.env.NEXT_PUBLIC_DISCORD_SERVER_ID}
          channel={process.env.NEXT_PUBLIC_DISCORD_CHANNEL_ID}
        />
      </Container>
    </div>
  );
}
