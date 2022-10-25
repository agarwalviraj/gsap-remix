import loadable from "@loadable/component";
var window: any = window || this,
  navigator = window.navigator || { userAgent: "" },
  dummyElement = {
    style: {},
    getElementsByTagName: function () {
      return [];
    },
  },
  document: any = document || {
    createElement: function () {
      return dummyElement;
    },
  };
import { gsap } from "gsap";
import { useEffect } from "react";
export default function Index() {
  useEffect(() => {
    window = window || this;
    navigator = window.navigator || { userAgent: "" };
    dummyElement = {
      style: {},
      getElementsByTagName: function () {
        return [];
      },
    };
    document = document || {
      createElement: function () {
        return dummyElement;
      },
    };
    if (window)
      gsap
        .timeline({ repeat: -1 })
        .to(".button__loader", {
          duration: 0.3,
          opacity: 0.6,
          stagger: {
            amount: 0.6,
          },
        })
        .to(".button__loader", {
          duration: 0.3,
          opacity: 1,
          stagger: {
            amount: 0.6,
          },
        });
  }, []);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
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
