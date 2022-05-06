import { CloseButton } from "../CloseButton";

import bugImageUrl from './../../assets/bug.svg';
import ideaImageUrl from './../../assets/idea.svg'
import thoughtImageUrl from './../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Image de um inseto",
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Image de uma lampada",
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Image de um balao de pensamento",
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSend] = useState(false)

  function handleRestartFeedback(){
    setFeedbackType(null)
    setFeedbackSend(false)
  }

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      { feedbackSent ? (
        <FeedbackSuccessStep handleRestartFeedback={handleRestartFeedback}/>
      ): (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep setFeedbackType={setFeedbackType} />
          ) : (
            <FeedbackContentStep 
              setFeedbackSend={()=> setFeedbackSend(true)}
              feedbackType={feedbackType}
              handleRestartFeedback={handleRestartFeedback}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por <a href="https://github.com/higoraln" className="underline underline-offset-2">Higor Allan</a>
      </footer>
    </div>
  )
}