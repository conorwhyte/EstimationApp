/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateQuestionInput = {
  id?: string | null,
  text: string,
  tags?: Array< string | null > | null,
  links?: Array< string | null > | null,
  quizQuestionsId?: string | null,
};

export type UpdateQuestionInput = {
  id: string,
  text?: string | null,
  tags?: Array< string | null > | null,
  links?: Array< string | null > | null,
  quizQuestionsId?: string | null,
  expectedVersion: number,
};

export type DeleteQuestionInput = {
  id?: string | null,
  expectedVersion: number,
};

export type CreateAnswerInput = {
  id?: string | null,
  text?: string | null,
  correct?: boolean | null,
  answerQuestionId?: string | null,
};

export type UpdateAnswerInput = {
  id: string,
  text?: string | null,
  correct?: boolean | null,
  answerQuestionId?: string | null,
  expectedVersion: number,
};

export type DeleteAnswerInput = {
  id?: string | null,
  expectedVersion: number,
};

export type CreateQuizInput = {
  id?: string | null,
  title: string,
};

export type UpdateQuizInput = {
  id: string,
  title?: string | null,
  expectedVersion: number,
};

export type DeleteQuizInput = {
  id?: string | null,
  expectedVersion: number,
};

export type ModelQuestionFilterInput = {
  id?: ModelIDFilterInput | null,
  text?: ModelStringFilterInput | null,
  tags?: ModelStringFilterInput | null,
  links?: ModelStringFilterInput | null,
  and?: Array< ModelQuestionFilterInput | null > | null,
  or?: Array< ModelQuestionFilterInput | null > | null,
  not?: ModelQuestionFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelAnswerFilterInput = {
  id?: ModelIDFilterInput | null,
  text?: ModelStringFilterInput | null,
  correct?: ModelBooleanFilterInput | null,
  and?: Array< ModelAnswerFilterInput | null > | null,
  or?: Array< ModelAnswerFilterInput | null > | null,
  not?: ModelAnswerFilterInput | null,
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelQuizFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  and?: Array< ModelQuizFilterInput | null > | null,
  or?: Array< ModelQuizFilterInput | null > | null,
  not?: ModelQuizFilterInput | null,
};

export type CreateQuestionMutationVariables = {
  input: CreateQuestionInput,
};

export type CreateQuestionMutation = {
  createQuestion:  {
    __typename: "Question",
    id: string,
    text: string,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    answers:  {
      __typename: "ModelAnswerConnection",
      items:  Array< {
        __typename: "Answer",
        id: string,
        text: string | null,
        correct: boolean | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type UpdateQuestionMutationVariables = {
  input: UpdateQuestionInput,
};

export type UpdateQuestionMutation = {
  updateQuestion:  {
    __typename: "Question",
    id: string,
    text: string,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    answers:  {
      __typename: "ModelAnswerConnection",
      items:  Array< {
        __typename: "Answer",
        id: string,
        text: string | null,
        correct: boolean | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type DeleteQuestionMutationVariables = {
  input: DeleteQuestionInput,
};

export type DeleteQuestionMutation = {
  deleteQuestion:  {
    __typename: "Question",
    id: string,
    text: string,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    answers:  {
      __typename: "ModelAnswerConnection",
      items:  Array< {
        __typename: "Answer",
        id: string,
        text: string | null,
        correct: boolean | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type CreateAnswerMutationVariables = {
  input: CreateAnswerInput,
};

export type CreateAnswerMutation = {
  createAnswer:  {
    __typename: "Answer",
    id: string,
    text: string | null,
    correct: boolean | null,
    question:  {
      __typename: "Question",
      id: string,
      text: string,
      tags: Array< string | null > | null,
      links: Array< string | null > | null,
      answers:  {
        __typename: "ModelAnswerConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null,
    version: number,
  } | null,
};

export type UpdateAnswerMutationVariables = {
  input: UpdateAnswerInput,
};

export type UpdateAnswerMutation = {
  updateAnswer:  {
    __typename: "Answer",
    id: string,
    text: string | null,
    correct: boolean | null,
    question:  {
      __typename: "Question",
      id: string,
      text: string,
      tags: Array< string | null > | null,
      links: Array< string | null > | null,
      answers:  {
        __typename: "ModelAnswerConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null,
    version: number,
  } | null,
};

export type DeleteAnswerMutationVariables = {
  input: DeleteAnswerInput,
};

export type DeleteAnswerMutation = {
  deleteAnswer:  {
    __typename: "Answer",
    id: string,
    text: string | null,
    correct: boolean | null,
    question:  {
      __typename: "Question",
      id: string,
      text: string,
      tags: Array< string | null > | null,
      links: Array< string | null > | null,
      answers:  {
        __typename: "ModelAnswerConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null,
    version: number,
  } | null,
};

export type CreateQuizMutationVariables = {
  input: CreateQuizInput,
};

export type CreateQuizMutation = {
  createQuiz:  {
    __typename: "Quiz",
    id: string,
    title: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        text: string,
        tags: Array< string | null > | null,
        links: Array< string | null > | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type UpdateQuizMutationVariables = {
  input: UpdateQuizInput,
};

export type UpdateQuizMutation = {
  updateQuiz:  {
    __typename: "Quiz",
    id: string,
    title: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        text: string,
        tags: Array< string | null > | null,
        links: Array< string | null > | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type DeleteQuizMutationVariables = {
  input: DeleteQuizInput,
};

export type DeleteQuizMutation = {
  deleteQuiz:  {
    __typename: "Quiz",
    id: string,
    title: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        text: string,
        tags: Array< string | null > | null,
        links: Array< string | null > | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type GetQuestionQueryVariables = {
  id: string,
};

export type GetQuestionQuery = {
  getQuestion:  {
    __typename: "Question",
    id: string,
    text: string,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    answers:  {
      __typename: "ModelAnswerConnection",
      items:  Array< {
        __typename: "Answer",
        id: string,
        text: string | null,
        correct: boolean | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestionsQuery = {
  listQuestions:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      id: string,
      text: string,
      tags: Array< string | null > | null,
      links: Array< string | null > | null,
      answers:  {
        __typename: "ModelAnswerConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetAnswerQueryVariables = {
  id: string,
};

export type GetAnswerQuery = {
  getAnswer:  {
    __typename: "Answer",
    id: string,
    text: string | null,
    correct: boolean | null,
    question:  {
      __typename: "Question",
      id: string,
      text: string,
      tags: Array< string | null > | null,
      links: Array< string | null > | null,
      answers:  {
        __typename: "ModelAnswerConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null,
    version: number,
  } | null,
};

export type ListAnswersQueryVariables = {
  filter?: ModelAnswerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAnswersQuery = {
  listAnswers:  {
    __typename: "ModelAnswerConnection",
    items:  Array< {
      __typename: "Answer",
      id: string,
      text: string | null,
      correct: boolean | null,
      question:  {
        __typename: "Question",
        id: string,
        text: string,
        tags: Array< string | null > | null,
        links: Array< string | null > | null,
        version: number,
      } | null,
      version: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetQuizQueryVariables = {
  id: string,
};

export type GetQuizQuery = {
  getQuiz:  {
    __typename: "Quiz",
    id: string,
    title: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        text: string,
        tags: Array< string | null > | null,
        links: Array< string | null > | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type ListQuizzesQueryVariables = {
  filter?: ModelQuizFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuizzesQuery = {
  listQuizzes:  {
    __typename: "ModelQuizConnection",
    items:  Array< {
      __typename: "Quiz",
      id: string,
      title: string,
      questions:  {
        __typename: "ModelQuestionConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion:  {
    __typename: "Question",
    id: string,
    text: string,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    answers:  {
      __typename: "ModelAnswerConnection",
      items:  Array< {
        __typename: "Answer",
        id: string,
        text: string | null,
        correct: boolean | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion:  {
    __typename: "Question",
    id: string,
    text: string,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    answers:  {
      __typename: "ModelAnswerConnection",
      items:  Array< {
        __typename: "Answer",
        id: string,
        text: string | null,
        correct: boolean | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion:  {
    __typename: "Question",
    id: string,
    text: string,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    answers:  {
      __typename: "ModelAnswerConnection",
      items:  Array< {
        __typename: "Answer",
        id: string,
        text: string | null,
        correct: boolean | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type OnCreateAnswerSubscription = {
  onCreateAnswer:  {
    __typename: "Answer",
    id: string,
    text: string | null,
    correct: boolean | null,
    question:  {
      __typename: "Question",
      id: string,
      text: string,
      tags: Array< string | null > | null,
      links: Array< string | null > | null,
      answers:  {
        __typename: "ModelAnswerConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null,
    version: number,
  } | null,
};

export type OnUpdateAnswerSubscription = {
  onUpdateAnswer:  {
    __typename: "Answer",
    id: string,
    text: string | null,
    correct: boolean | null,
    question:  {
      __typename: "Question",
      id: string,
      text: string,
      tags: Array< string | null > | null,
      links: Array< string | null > | null,
      answers:  {
        __typename: "ModelAnswerConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null,
    version: number,
  } | null,
};

export type OnDeleteAnswerSubscription = {
  onDeleteAnswer:  {
    __typename: "Answer",
    id: string,
    text: string | null,
    correct: boolean | null,
    question:  {
      __typename: "Question",
      id: string,
      text: string,
      tags: Array< string | null > | null,
      links: Array< string | null > | null,
      answers:  {
        __typename: "ModelAnswerConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null,
    version: number,
  } | null,
};

export type OnCreateQuizSubscription = {
  onCreateQuiz:  {
    __typename: "Quiz",
    id: string,
    title: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        text: string,
        tags: Array< string | null > | null,
        links: Array< string | null > | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type OnUpdateQuizSubscription = {
  onUpdateQuiz:  {
    __typename: "Quiz",
    id: string,
    title: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        text: string,
        tags: Array< string | null > | null,
        links: Array< string | null > | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type OnDeleteQuizSubscription = {
  onDeleteQuiz:  {
    __typename: "Quiz",
    id: string,
    title: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        text: string,
        tags: Array< string | null > | null,
        links: Array< string | null > | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};
