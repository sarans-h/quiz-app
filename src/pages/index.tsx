import { io } from "socket.io-client";
import { useEffect, useRef } from "react";
import { trpc } from "@/utils/trpc";

export default function Home() {
  const socketRef = useRef<any>(null);

  useEffect(() => {
    fetch("/api/socket"); // ensure server-side socket is up

    socketRef.current = io();

    socketRef.current.on("connect", () => {
      console.log("✅ Socket client connected");
    });

    // Example event
    socketRef.current.on("receive-answer", (data: any) => {
      console.log("🎉 Got answer update", data);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendAnswer = () => {
    socketRef.current.emit("send-answer", { roomId: "abc123", answer: "42" });
  };
  const gr=trpc.quiz.hello.useQuery({ name: "World" });

  return (
    <div>
      <button onClick={sendAnswer}>Send Answer</button>
      <h1>Quiz App</h1>
      <h2>{gr.data?.greeting}</h2>
    </div>
  );
}

// Added a comment to test Husky and lint-staged
// Test change for pre-commit hook
