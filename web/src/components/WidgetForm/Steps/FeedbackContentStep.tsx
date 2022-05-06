import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from '../index';
import { ScreenshotButton } from "../ScreenshotButton";

interface IFeedBackContentStepProps {
  feedbackType: FeedbackType;
  handleRestartFeedback: () => void;
  setFeedbackSend: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  handleRestartFeedback,
  setFeedbackSend
}: IFeedBackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState("")

  function handleSubmitFeedback(e: FormEvent){
    e.preventDefault();

    console.log({
      comment,
      screenshot
    })
    setFeedbackSend()
  }
  
  return(
    <>
      <header>
        <button 
          type='button'
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={handleRestartFeedback}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea 
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes oque esta acontecendo"
          onChange={(e) => setComment(e.target.value)}
        />
      <footer className="flex gap-2 my-2">
        <ScreenshotButton 
          setScreenshot={setScreenshot}
          screenshot={screenshot}
        />

        <button
          type="submit"
          disabled={comment.length === 0}
          className="p-2 bg-brand-500 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500 disabled:cursor-not-allowed"
        >
          Enviar feedback
        </button>
      </footer>
      </form>
    </>
  )
}