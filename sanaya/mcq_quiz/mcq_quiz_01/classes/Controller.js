class

class Controller
{
    constructor(questionList)
    {
        this.questionList       =   questionList;
        this.currentQuestion    =   1;
        this.totalQuestions     =   20;
        this.totalCorrect       =   0;
        this.remoteJsonFilePath =   "";
    }

    function setCurrentQuestion(num)
    {
        this.currentQuestion = num;
    }

}

class UI_Controller
{
    constructor()
    {
    }

    function setQuestion(num)
    {
        // set statement of question
        // hide all radio buttons
        // show radio buttons
        // mark the radio button if it the choosen answer
    }

    function saveAnswer(event)
    {
        // event.target.value
    }

}
