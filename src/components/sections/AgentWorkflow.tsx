import { agentWorkflow } from "@/lib/home-content";

export function AgentWorkflow() {
  return (
    <section id="agentic-vs-chatbot" className="section-pad border-b border-line bg-surface">
      <div className="container-edge">
        <div className="max-w-[720px]">
          <p className="eyebrow">{agentWorkflow.eyebrow}</p>
          <h2 className="heading-2 mt-4">
            {agentWorkflow.headingBefore}{" "}
            <span className="heading-gradient">{agentWorkflow.headingAfter}</span>
          </h2>
          <p className="lead mt-4 max-w-[54ch]">{agentWorkflow.sub}</p>
        </div>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          <div className="how-it-works-frame">
            <video
              src="/how-it-works.mp4"
              poster="/how-it-works.png"
              aria-label="Diagram of an AI worker receiving an enquiry, checking systems and completing the task"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="how-it-works-still"
            />
          </div>

          <ol className="workflow-timeline">
            {agentWorkflow.steps.map((step, index) => (
              <li key={step.title} className="workflow-step">
                <div className="workflow-step-rail">
                  <span className="workflow-step-marker" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <article className="workflow-step-card">
                  <h3 className="workflow-step-title">{step.title}</h3>
                  <p className="workflow-step-body">{step.body}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
