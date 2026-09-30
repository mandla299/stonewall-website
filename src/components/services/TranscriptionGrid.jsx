import React, { useEffect, useState } from "react";
import {
  Volume2,
  FileText,
  Users,
  LayoutList,
  ExternalLink,
} from "lucide-react";

// Use your shared accessible modal
import AccessibleModal from "../modals/AccessibleModal";

const transcriptionTypes = [
  {
    title: "Verbatim Transcription",
    description:
      "Captures every word, pause, and utterance exactly as spoken. Ideal for legal proceedings, disciplinary hearings, and academic research.",
    sample: `"Um, yeah... I mean, I—I wasn't really sure what to do at that point, you know? [pause] So I just waited."`,
    fullSample: `Verbatim Transcript — A4 Format

[Start of Transcript]

Interviewer: Can you walk me through what happened that morning?

Interviewee: Um, yeah... I mean, I—I wasn't really sure what to do at that point, you know? [pause] So I just waited. I kept thinking maybe someone would show up or call or something. [long pause] But nothing happened.

Interviewer: Did you try contacting anyone?

Interviewee: I did, yeah. I called my supervisor, but it just rang. Then I—I think I sent a message, but I don’t remember exactly what I said. It was all kind of a blur.

Interviewer: And how were you feeling?

Interviewee: Honestly? Confused. Nervous. I didn’t want to make the wrong move, so I just stayed put.

Interviewer: Were you alone at that point?

Interviewee: Yeah, I was. I mean, there were people around, like in the building, but no one I knew. I didn’t feel like I could just walk up and ask, you know?

Interviewer: Did anyone eventually reach out?

Interviewee: Not for a while. I think it was maybe... I don’t know, like two hours later? Someone from HR called and asked where I was. I told them I was still in the lobby.

Interviewer: What did they say?

Interviewee: They sounded surprised. Like, “Why didn’t you come up?” And I was like, “I wasn’t sure I was supposed to.” It was awkward.

Interviewer: Did you feel like the instructions were unclear?

Interviewee: Yeah, definitely. I mean, I got the email, but it didn’t say where to go exactly. Just “report to the main office.” I didn’t know if that meant reception or upstairs or what.

Interviewer: Looking back, what would’ve helped?

Interviewee: Hmm... maybe a map or a contact person. Or just clearer steps. Like, “Go to floor 3, ask for Jane.” Something like that.

Interviewer: Did this affect your confidence going forward?

Interviewee: A bit, yeah. I mean, I kept wondering if I’d already messed up before I even started. It made me second-guess everything.

Interviewer: That’s understandable. Did things improve after that?

Interviewee: Eventually, yeah. Once I got settled and met the team, it was better. But that first impression stuck with me.

Interviewer: Thank you for sharing that. It’s helpful to understand how those moments feel from your perspective.

Interviewee: Yeah, no problem. I just hope it helps someone else avoid that kind of confusion.

[End of Transcript]
`,
    icon: FileText,
  },
  {
    title: "Edited Transcription",
    description:
      "Cleans up filler words and false starts for readability. Commonly used for podcasts, interviews, and published articles.",
    sample: `"I wasn’t sure what to do at that point, so I waited."`,
    fullSample: `Edited Transcript — A4 Format

[Start of Transcript]

Interviewer: Can you walk me through what happened that morning?

Interviewee: I arrived at the building around 8:30 AM. I wasn’t sure where to go, so I waited in the lobby. I assumed someone would come down or call me, but nothing happened for quite a while.

Interviewer: Did you receive any instructions beforehand?

Interviewee: Yes, I got an email the day before, but it was vague. It just said to report to the main office. I wasn’t sure if that meant reception or a specific floor.

Interviewer: Did you try contacting anyone?

Interviewee: I called my supervisor and sent a message, but I didn’t get a response. I waited for about two hours before someone from HR finally called and asked where I was.

Interviewer: What did they say?

Interviewee: They asked why I hadn’t come upstairs. I explained that I wasn’t sure where to go and didn’t want to make assumptions. They seemed surprised and said I should’ve just asked at reception.

Interviewer: How did that make you feel?

Interviewee: Honestly, I felt embarrassed. I started doubting myself and wondering if I’d already made a bad impression. It was frustrating because I wanted to do the right thing, but I didn’t have enough information.

Interviewer: Did anyone offer clarification afterward?

Interviewee: Yes, once I got upstairs, someone walked me through the onboarding steps. Things were smoother after that, but the initial confusion stuck with me.

Interviewer: Looking back, what would’ve helped?

Interviewee: Clearer instructions. Even a simple checklist or map would’ve made a big difference. Something like “Go to floor 3, ask for Jane” would’ve saved a lot of stress.

Interviewer: Did this experience affect your confidence?

Interviewee: A little. I was more cautious in the days that followed. I double-checked everything and asked more questions than usual. I didn’t want to repeat that kind of mistake.

Interviewer: And how did the rest of your onboarding go?

Interviewee: It went well. The team was welcoming, and I eventually felt more comfortable. But that first day definitely left a mark.

Interviewer: Thank you for sharing that. It’s helpful to hear how small gaps in communication can have a big impact.

Interviewee: I’m glad to share. Hopefully it helps improve the process for others.

[End of Transcript]
`,
    icon: Volume2,
  },
  {
    title: "Speaker Attribution",
    description:
      "Assigns speakers with color-coded labels and structures dialogue for clarity. Essential for multi-voice recordings like panel discussions or team meetings.",
    sample: `Speaker 1: I think we should revisit the proposal.\nSpeaker 2: Agreed. Let’s schedule a follow-up by Friday.`,
    fullSample: `Speaker Attribution — A4 Format

[Start of Transcript]

Speaker 1 [Blue]: I think we should revisit the proposal. The feedback from last week suggests we missed a few key points, especially around budget allocation and stakeholder engagement.

Speaker 2 [Green]: Agreed. I reviewed the notes again, and there were several concerns about the timeline and deliverables. Let’s schedule a follow-up by Friday and include the new data from the marketing team.

Speaker 3 [Orange]: I’ll prepare the updated slides and circulate them by Thursday. Should I include the revised KPIs as well?

Speaker 1 [Blue]: Yes, definitely. Let’s make sure the metrics are aligned with the new scope. Also, we should clarify the roles for each phase—there was some confusion last time.

Speaker 2 [Green]: Good point. I’ll draft a breakdown of responsibilities and send it for review. We can finalize it during the follow-up.

Speaker 3 [Orange]: Should we loop in the design team now or wait until after the next review?

Speaker 1 [Blue]: Let’s wait. I think it’s better to have a consolidated direction before involving them. Otherwise, we risk rework.

Speaker 2 [Green]: Makes sense. I’ll also check with finance about the adjusted budget. We may need to reallocate some of the contingency funds.

Speaker 3 [Orange]: I’ll flag that in the slide deck. Anything else we should prep?

Speaker 1 [Blue]: Just make sure the tone is solution-oriented. We want to acknowledge the gaps but also show how we’re addressing them.

Speaker 2 [Green]: Got it. I’ll add a summary slide with key resolutions and next steps.

Speaker 3 [Orange]: I’ll format it for clarity and consistency. Should we use the same template as last time?

Speaker 1 [Blue]: Yes, but let’s update the color scheme slightly—make it feel fresh but familiar.

Speaker 2 [Green]: I’ll send a few options by tomorrow morning.

Speaker 3 [Orange]: Perfect. I’ll start compiling everything now.

Speaker 1 [Blue]: Thanks, team. Let’s aim for clarity and conciseness this time. We want this presentation to feel tight and confident.

[End of Transcript]
`,
    icon: Users,
  },
  {
    title: "Timestamped Transcription",
    description:
      "Anchors each segment with time markers for syncing and reference. Useful for video editing, accessibility, and review workflows.",
    sample: `[00:02:15] I wasn’t sure what to do at that point, so I waited.`,
    fullSample: `Timestamped Transcript — A4 Format

[Start of Transcript]

[00:00:00] Interviewer: Can you walk me through what happened that morning?

[00:00:07] Interviewee: I arrived at the building around 8:30 AM. I wasn’t sure where to go, so I waited in the lobby. I thought someone might come down or call me, but nothing happened.

[00:00:20] Interviewer: Did you receive any instructions beforehand?

[00:00:24] Interviewee: Yes, I got an email the day before. It said to report to the main office, but it didn’t specify a floor or contact person. I didn’t want to assume, so I stayed put.

[00:00:38] Interviewer: Did you try contacting anyone?

[00:00:42] Interviewee: I called my supervisor and sent a message, but I don’t remember the exact wording. I was trying to be polite and not sound panicked, but I was definitely unsure.

[00:00:55] Interviewer: How long did you wait?

[00:00:58] Interviewee: About two hours. I kept checking my phone and looking around, hoping someone would notice me or reach out.

[00:01:08] Interviewer: Did anyone eventually contact you?

[00:01:11] Interviewee: Yes, someone from HR called and asked where I was. I told them I was still in the lobby. They seemed surprised and said I should’ve come upstairs.

[00:01:22] Interviewer: How did that make you feel?

[00:01:25] Interviewee: Embarrassed, mostly. I felt like I’d already messed up before even starting. I was trying to follow instructions, but they weren’t clear.

[00:01:35] Interviewer: Did things improve after that?

[00:01:38] Interviewee: Eventually, yes. Once I got upstairs, someone walked me through the onboarding steps. The team was friendly, and I started to feel more comfortable.

[00:01:50] Interviewer: Looking back, what would’ve helped?

[00:01:53] Interviewee: Clearer instructions. Even a short checklist or map would’ve made a big difference. Something like “Go to floor 3, ask for Jane” would’ve saved a lot of stress.

[00:02:05] Interviewer: Did this experience affect your confidence?

[00:02:08] Interviewee: A little. I was more cautious in the days that followed. I double-checked everything and asked more questions than usual. I didn’t want to repeat that kind of mistake.

[00:02:20] Interviewer: And how did the rest of your onboarding go?

[00:02:23] Interviewee: It went well. The team was welcoming, and I eventually felt more confident. But that first day definitely stuck with me.

[00:02:33] Interviewer: Thank you for sharing that. It’s helpful to understand how small gaps in communication can have a big impact.

[00:02:40] Interviewee: I’m glad to share. Hopefully it helps improve the process for others.

[End of Transcript]
`,
    icon: LayoutList,
  },
  {
    title: "Delivery Planning",
    description:
      "Agree on transcript style, output format, and delivery requirements before work begins. Timing depends on recording length, audio quality, and scope.",
    sample: `Style: Edited transcript
Speakers: Labelled
Timestamps: Required
Delivery date: To be agreed`,
    fullSample: `Illustrative Delivery Checklist

Recording length: To be confirmed
Audio quality: To be reviewed
Transcript style: Edited
Speaker labels: Required
Timestamp interval: To be agreed
Output format: To be agreed
Delivery date: To be agreed

Review notes:
- Confirm spelling of names and specialist terms.
- Mark unclear audio for review.
- Confirm any formatting requirements.

This is an example checklist, not a delivery guarantee.`,
    icon: LayoutList,
  },
  {
    title: "Custom Formatting",
    description:
      "Transcripts styled for subtitles, reports, or accessibility. Examples include SRT files, bullet-point summaries, and branded layouts.",
    sample: `1
00:02:15,000 --> 00:02:18,000
I wasn’t sure what to do at that point, so I waited.`,
    fullSample: `SRT Format — A4 Preview

[Start of Transcript]

1
00:00:03,000 --> 00:00:06,000
Good morning. Can you walk me through what happened that morning?

2
00:00:07,000 --> 00:00:10,000
I wasn’t sure what to do at that point, so I waited.

3
00:00:11,000 --> 00:00:14,000
I kept thinking someone would call or show up, but nothing happened.

4
00:00:15,000 --> 00:00:18,000
I called my supervisor and sent a message.

5
00:00:19,000 --> 00:00:22,000
I don’t remember the exact wording. It was all kind of a blur.

6
00:00:23,000 --> 00:00:26,000
I didn’t want to make the wrong move, so I stayed put.

7
00:00:27,000 --> 00:00:30,000
Eventually, someone from HR called and asked where I was.

8
00:00:31,000 --> 00:00:34,000
I told them I was still in the lobby, waiting.

9
00:00:35,000 --> 00:00:38,000
They seemed surprised and said I should’ve come upstairs.

10
00:00:39,000 --> 00:00:42,000
I felt embarrassed. I thought I’d already messed up.

11
00:00:43,000 --> 00:00:46,000
I was just trying to follow instructions, but they weren’t clear.

12
00:00:47,000 --> 00:00:50,000
Once I got upstairs, things improved. The team was welcoming.

13
00:00:51,000 --> 00:00:54,000
Looking back, clearer instructions would’ve helped a lot.

14
00:00:55,000 --> 00:00:58,000
Even a short checklist or map would’ve made a big difference.

15
00:00:59,000 --> 00:01:02,000
I was more cautious after that. I double-checked everything.

16
00:01:03,000 --> 00:01:06,000
I didn’t want to repeat that kind of mistake.

17
00:01:07,000 --> 00:01:10,000
The rest of onboarding went well. I eventually felt confident.

18
00:01:11,000 --> 00:01:14,000
But that first day definitely stuck with me.

19
00:01:15,000 --> 00:01:18,000
Thanks for sharing. It helps us improve the process.

20
00:01:19,000 --> 00:01:22,000
I’m glad to share. Hopefully it helps someone else.

[End of Transcript]
`,
    icon: FileText,
  },
];

const TranscriptionGrid = () => {
  const [selectedSample, setSelectedSample] = useState(null);
  const [showSamples, setShowSamples] = useState(false);

  useEffect(() => {
    if (!selectedSample) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedSample]);

  return (
    <section
      id="transcription-services"
      aria-labelledby="transcription-heading"
      className="sw-industries"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-orange-300 uppercase">
              02 / Transcription
            </p>

            <h2
              id="transcription-heading"
              className="text-4xl leading-tight font-extrabold tracking-[-0.04em] text-white sm:text-5xl"
            >
              Keep the conversation.
              <br />
              <span className="sw-gradient-text">Make it searchable.</span>
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="text-base leading-8 text-slate-300">
              Turn audio and video into written records you can revisit,
              reference, and share. Choose the transcript style and formatting
              that suit your project.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Recording quality, speaker overlap, and specialist terminology
              affect the work involved. We discuss these requirements before
              agreeing on delivery.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-white/15 py-5">
          <p className="text-sm font-semibold text-white">
            Different conversations. Useful written records.
          </p>

          <label className="inline-flex cursor-pointer items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white">
            <input
              type="checkbox"
              checked={showSamples}
              onChange={(event) => setShowSamples(event.target.checked)}
              aria-controls="transcription-grid"
              className="h-4 w-4 accent-orange-400"
            />
            Show sample snippets
          </label>
        </div>

        <p className="mt-5 text-xs leading-6 text-slate-400">
          All previews are illustrative examples.
        </p>

        <div
          id="transcription-grid"
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {transcriptionTypes.map((type) => (
            <article key={type.title} className="sw-transcript-card">
              <span className="sw-industry-icon">
                {React.createElement(type.icon, {
                  size: 24,
                  "aria-hidden": true,
                })}
              </span>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-white">
                {type.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {type.description}
              </p>

              {showSamples && (
                <div className="mt-5 rounded-xl border border-white/10 bg-[#0b1024]/35 p-4">
                  <p className="mb-3 text-xs font-bold tracking-wider text-orange-300 uppercase">
                    Sample excerpt
                  </p>
                  <pre className="max-h-40 overflow-auto whitespace-pre-wrap break-words font-mono text-xs leading-6 text-slate-300">
                    {type.sample}
                  </pre>
                </div>
              )}

              <div className="mt-auto pt-6">
                <button
                  type="button"
                  onClick={() => setSelectedSample(type)}
                  aria-haspopup="dialog"
                  className="sw-transcript-action"
                >
                  View full sample
                  <ExternalLink size={16} aria-hidden="true" />
                  <span className="sr-only">: {type.title}</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {selectedSample && (
          <div
            className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-[#0b1024]/65 px-4 py-6 backdrop-blur-sm sm:py-12"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedSample(null);
              }
            }}
          >
            <div className="w-full max-w-3xl">
              <AccessibleModal
                title={`${selectedSample.title} — Full Sample`}
                description="Illustrative transcript example. Scroll to read the full text."
                onClose={() => setSelectedSample(null)}
              >
                <div className="max-h-[50dvh] overflow-auto rounded-xl border border-slate-200 bg-[#faf8f5] p-4 sm:p-6">
                  <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-7 text-[#10152f]">
                    {selectedSample.fullSample}
                  </pre>
                </div>
              </AccessibleModal>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TranscriptionGrid;
