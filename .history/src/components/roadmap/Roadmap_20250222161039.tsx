"use client";

import { motion } from "framer-motion";
import { RoadmapItem } from "@/types/roadmap";

const roadmapData: RoadmapItem[] = [
  {
    id: "scope-analysis-assessment",
    title: "MVP Scope, Technical Analysis & Risk Assessment",
    description: "Define MVP versus long-term features; Develop analysis models with VC partner; Analyse API integrations, Solana staking protocols and governance tools; Refine risk metrics and composite scoring.",
    quarter: "Q1",
    year: 2025,
    status: "in-progress",
  },
  {
    id: "prototyping",
    title: "Prototyping",
    description: "Map out key user flows for conversational interface and staking; Complete wireframes, and begin v1 of UI & UX.",
    quarter: "Q1",
    year: 2025,
    status: "in-progress",
  },
  {
    id: "architecture",
    title: "Architecture",
    description: "Finalise cognitive blueprint; Document interfaces between sub-agents and external systems.",
    quarter: "Q1",
    year: 2025,
    status: "in-progress",
  },
  {
    id: "infra-design",
    title: "Infrastructure Design",
    description:
      "Architect the auto-scaling, containerised infrastructure; Design an audit logging mechanism.",
    quarter: "Q1",
    year: 2025,
    status: "in-progress",
  },
  {
    id: "staking-design",
    title: "Staking & Tiered Access",
    description:
      "Finalise the dynamic USD value system, wallet limit calculations, and reflection reward mechanism; Define metrics and user benefits for MVP and future premium tiers. Leverage Solana protocols to implement staking, dynamic trading wallet limits, and the reflection reward mechanism.",
    quarter: "Q1",
    year: 2025,
    status: "in-progress",
  },
  {
    id: "mvp-dev",
    title: "MVP Development",
    description:
      "Build aggregation layer to fetch, validate, and normalise data for MVP APIs; Develop Brain STEM, Temporal and Parietal sub-agents for detailed analysis; Code the aggregation module that consolidates insights. Integrate a basic user interface for staking, token management, and tier access.",
    quarter: "Q2",
    year: 2025,
    status: "in-progress",
  },
  {
    id: "testing",
    title: "Testing, Validation & Iteration",
    description:
      "Validate each LLM module individually, end-to-end Testing; Stress-test cloud infrastructure for auto-scaling and high availability; penetration tests and smart contract audits.",
    quarter: "Q2",
    year: 2025,
    status: "in-progress",
  },
  {
  id: "uat",
    title: "Governance & UAT",
    description:
      "Gather user feedback on chatbot UI and analyses; Test the process for external community votes.",
    quarter: "Q2",
    year: 2025,
    status: "in-progress",
  },
  {
    id: "mvp-deployment",
    title: "MVP Deployment & Scaling",
    description:
      "Launch the containerised MVP on a cloud-native platform with auto-scaling capabilities; Activate audit logging systems and monitoring dashboards; Roll out the staking mechanism; Publish internal docs for system architecture, API integrations, and operational procedures.",
    quarter: "Q2",
    year: 2025,
    status: "in-progress",
  },
  {
    id: "autonomous-investing",
    title: "Autonomous Investing ",
    description:
      "Develop algorithms for autonomous investments. Build monitoring tools for tracking investment performance with feedback loop provided by DMN LLM.",
    quarter: "Q3",
    year: 2025,
    status: "in-progress",
  },
];

const statusColors = {
  completed: "bg-sora-secondary",
  "in-progress": "bg-sora-light",
  planned: "bg-gray-400",
};

/*const legendItems = [
  { status: "completed" as const, label: "Completed" },
  { status: "in-progress" as const, label: "In Progress" },
  { status: "planned" as const, label: "Planned" },
];*/

export default function Roadmap() {
  return (
    <div className="relative mx-auto">
      {/*<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-4 mb-12"
      >
        <div className="flex items-center justify-center gap-6">
          {legendItems.map((item) => (
            <div key={item.status} className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  statusColors[item.status]
                } border border-sora-secondary/20`}
              />
              <span className="text-xs text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>*/}

      <div className="absolute left-4 md:left-1/2 top-12 bottom-0 w-[2px] bg-sora-accent" />

      <div className="space-y-16">
        {roadmapData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex ${
                isLeft
                  ? "justify-start md:justify-start"
                  : "justify-start md:justify-end"
              } items-center`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2">
                <div
                  className={`w-4 h-4 rounded-full ${
                    statusColors[item.status]
                  } border-4 border-white shadow-sm`}
                />
              </div>

              <div
                className={`w-full md:w-[calc(50%-3rem)] pl-12 ${
                  isLeft ? "md:pr-12 md:pl-0" : "md:pl-12"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-600">
                      {item.quarter} {item.year}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
