import loadable from "@loadable/component";
import { LegacyRef, RefObject, useEffect, useRef } from "react";
import gsap from "gsap";
import { useLoaderData } from "@remix-run/react";
export const loader = () => {
  return { timeline: gsap.timeline({ repeat: -1 }) };
};
export default function Index() {
  const testRef = useRef<any>();
  const data = useLoaderData();
  useEffect(() => {
    if (window && testRef) data.timeline;
    // .to(testRef.current, {
    //   duration: 0.3,
    //   opacity: 0.6,
    //   stagger: {
    //     amount: 0.6,
    //   },
    // })
    // .to(testRef.current, {
    //   duration: 0.3,
    //   opacity: 1,
    //   stagger: {
    //     amount: 0.6,
    //   },
    // });
  }, [data]);
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
