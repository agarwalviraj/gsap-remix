import loadable from "@loadable/component";
import { gsap } from "gsap";
import { LegacyRef, RefObject, useEffect, useRef } from "react";
export default function Index() {
  const testRef = useRef<any>();
  useEffect(() => {
    if (window && testRef)
      gsap
        .timeline({ repeat: -1 })
        .to(testRef.current, {
          duration: 0.3,
          opacity: 0.6,
          stagger: {
            amount: 0.6,
          },
        })
        .to(testRef.current, {
          duration: 0.3,
          opacity: 1,
          stagger: {
            amount: 0.6,
          },
        });
  }, [testRef]);
  return (
    <div
      ref={testRef}
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
    >
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
