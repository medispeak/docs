import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

// Import SVGs as React components
import VoiceTranscript from "@site/static/img/Medispeak Voice Transcript.svg";
import UniversalCompatibility from "@site/static/img/Medispeak Universal Compatibility.svg";
import SmartDataPopulation from "@site/static/img/smart-data-population.ea3895a4.svg";

type FeatureItem = {
  title: string;
  Icon: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Voice-Powered Documentation",
    Icon: VoiceTranscript,
    description: (
      <>
        Transform your medical documentation workflow with advanced voice
        recognition technology. Speak naturally and watch as your words are
        accurately transcribed and structured into EMR fields.
      </>
    ),
  },
  {
    title: "Universal EMR Integration",
    Icon: UniversalCompatibility,
    description: (
      <>
        Seamlessly integrate with any EMR system through our Chrome extension or
        web widget. Compatible with Epic, Cerner, Allscripts, and more. No
        complex setup required.
      </>
    ),
  },
  {
    title: "Smart Data Population",
    Icon: SmartDataPopulation,
    description: (
      <>
        Automatically populate EMR fields with structured data using intelligent
        field mapping and context recognition. Save time while ensuring accurate
        and consistent documentation.
      </>
    ),
  },
];

function Feature({ title, Icon, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <div className={styles.featureSvg}>
          <Icon />
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
