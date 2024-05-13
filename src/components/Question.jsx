import React, { useEffect } from "react";
import { useState } from "react";
import { Results } from "./Results";

export const Question = ({
  filteredQuestion,
  setIndexQuestion,
  indexQuestion,
  questionsFiltered,
  setActiveQuiz,
}) => {
  const [score, setScore] = useState(0);
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [answerRandom, setAnswersRandom] = useState([]);
  const [activeResult, setActiveResult] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    const answers = [
      ...filteredQuestion.incorrect_answers,
      filteredQuestion.correct_answer,
    ];
    setAnswersRandom(answers.sort(() => Math.random() - 0.5));
  }, [filteredQuestion]);

  const checkAnswer = (answerText, index) => {
    if (answerText === filteredQuestion.correct_answer) {
      setScore(score + 1);
    }
    console.log(filteredQuestion.correct_answer);

    setSelectAnswerIndex(index);
    setAnswered(true);
    if (answerText.trim() === "") {
      setTimerStarted(true);
      setTimeout(() => {
        onNextQuestion();
      }, 2000); // 2 segundos
    }
  };

  const onNextQuestion = () => {
    setIndexQuestion(indexQuestion + 1);
    setSelectAnswerIndex(null);
    setAnswered(false);
    setTimerStarted(false);
  };

  const onReset = () => {
    setScore(0);
    setIndexQuestion(0);
    setActiveQuiz(false);
  };

  return (
    <>
      {activeResult ? (
        <Results
          questionsFiltered={questionsFiltered}
          score={score}
          onReset={onReset}
        />
      ) : (
        <div className="flex flex-col justify-between shadow-md shadow-slate-300 w-[600px] h-[850px] p-10 rounded-lg">
          <div className="flex justify-between">
            <span className="text-xl font-bold">
              {indexQuestion + 1} / {questionsFiltered.length}
            </span>
            <div>
              <span className="font-semibold">Dificultad:</span>
              <span className="font-bold">{filteredQuestion.difficulty}</span>
            </div>
          </div>
          <button
            className="border px-5 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900"
            onClick={onReset}
          >
            Reiniciar
          </button>
          <div>
            <h1 className="font-bold">{filteredQuestion.question}</h1>
          </div>
          {filteredQuestion.img && (
            <div className="text-center">
              <img
                src={filteredQuestion.img}
                alt="imagen"
                className="w-30 mx-auto"
              />
            </div>
          )}
          <div className="grid grid-cols-2 gap-5">
            {answerRandom.map((answer, index) => (
              <button
                className={`border p-5 rounded-lg flex justify-center items-center hover:scale-105 ${
                  selectAnswerIndex !== null && index === selectAnswerIndex
                    ? answer === filteredQuestion.correct_answer
                      ? "bg-green-500"
                      : "bg-red-500"
                    : ""
                }`}
                key={answer}
                onClick={() => checkAnswer(answer, index)}
                disabled={answered && selectAnswerIndex !== index}
              >
                <p className="font-medium text-center text-sm">{answer}</p>
              </button>
            ))}
          </div>
          {timerStarted && (
            <p className="text-red-500 font-bold">
              Selecciona una respuesta...
            </p>
          )}
          {indexQuestion + 1 === questionsFiltered.length ? (
            <button
              className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium"
              onClick={() => {
                setAnswered(false);
                setActiveResult(true);
              }}
            >
              Finalizar
            </button>
          ) : (
            <button
              className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium"
              onClick={onNextQuestion}
            >
              Siguiente pregunta
            </button>
          )}
        </div>
      )}
    </>
  );
};
