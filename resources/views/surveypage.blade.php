<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content=
    "width=device-width, initial-scale=1.0">

    <style>

        /* Styling the Body element i.e. Color,
        Font, Alignment */
        body {
            background-color: #05c46b;
            font-family: Verdana;
            text-align: center;
        }


        /* Styling Button */
        button {
            background-color: #05c46b;
            border: 1px solid #777;
            border-radius: 2px;
            font-family: inherit;
            font-size: 21px;
            display: block;
            width: 100%;
            margin-top: 50px;
            margin-bottom: 20px;
        }
    </style>
</head>

<body>

<!-- Create Form -->
<form id="form" class="form-survey" action="<?php echo $_SERVER['REQUEST_URI'] ?>" method="GET">

    <div class="form-controls">
        <input type="hidden" name="id" value="<?php echo (int)request('id'); ?>">
        <label>
            1. Was the article true or false based on SciPEP’s recommendation?
        </label>
        <!-- Input Type Radio Button -->
        <label for="ques-1">
            <input type="radio"
                   id="11"
                   name="ques1" value="11"> True</input>
        </label>
        <label for="ques-2">
            <input type="radio"
                   id="12"
                   name="ques1" value="12"> False</input>
        </label>
        <label for="ques-3">
            <input type="radio"
                   id="13"
                   name="ques1" value="13"> I don't know</input>
        </label>
    </div>

    <div class="form-controls">
        <label>
            2. Did you have any prior beliefs/opinions about this topic?
        </label>

        <!-- Input Type Radio Button -->
        <label for="ques-2">
            <input type="radio"
                   id="21"
                   name="ques2" value="21"> Yes</input>
        </label>
        <label for="ques-2">
            <input type="radio"
                   id="22"
                   name="ques2" value="22"> No</input>
        </label>
    </div>

    <div class="form-controls">
        <label>
            3. Did your prior beliefs/opinions on this topic align with our recommendation?
        </label>

        <!-- Input Type Radio Button -->
        <label for="ques-3">
            <input type="radio"
                   id="31"
                   name="ques3" value="31"> Yes</input>
        </label>
        <label for="ques-3">
            <input type="radio"
                   id="32"
                   name="ques3" value="32"> No</input>
        </label>
        <label for="ques-3">
            <input type="radio"
                   id="33"
                   name="ques3" value="33"> Not applicable</input>
        </label>
    </div>

    <div class="form-controls">
        <label>
            4. If you held prior beliefs/opinions that did not align with the system’s recommendation, did the system change your beliefs/opinions on this topic?
        </label>

        <!-- Input Type Radio Button -->
        <label for="ques-4">
            <input type="radio"
                   id="41"
                   name="ques4" value="41"> Yes</input>
        </label>
        <label for="ques-4">
            <input type="radio"
                   id="42"
                   name="ques4" value="42"> Somewhat</input>
        </label>
        <label for="ques-4">
            <input type="radio"
                   id="43"
                   name="ques4" value="43"> No</input>
        </label>
        <label for="ques-4">
            <input type="radio"
                   id="44"
                   name="ques4" value="44"> Not applicable</input>
        </label>
    </div>

    <div class="form-controls">
        <label>
            5. What is your willingness to adopt the system for checking article credibility?
        </label>

        <!-- Input Type Radio Button -->
        <label for="ques-5">
            <input type="radio"
                   id="51"
                   name="ques5" value="51"> Definitely</input>
        </label>
        <label for="ques-5">
            <input type="radio"
                   id="52"
                   name="ques5" value="52"> Probably</input>
        </label>
        <label for="ques-5">
            <input type="radio"
                   id="53"
                   name="ques5" value="53"> Probably not</input>
        </label>
        <label for="ques-5">
            <input type="radio"
                   id="54"
                   name="ques5" value="54"> Definitely not</input>
        </label>
    </div>

    <!-- Multi-line Text Input controls -->
    <button type="submit" value="submit" class="btn btn-primary">
        Submit
    </button>
</form>
</body>

</html>

