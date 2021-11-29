<html lang="en" >
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/searchbox.css">
  <link rel="stylesheet" href="css/main.css">
  <link href="{{ asset('css/app3.css') }}" rel="stylesheet">

</head>
<body>
  <div class="s004">
      <form method="POST" action="{{ route('searchresults') }}">
          @csrf
          <!-- partial:index.partial.html -->
          <fieldset>
            <div class="wrapp">
               <div class="search">
                   <img class="voicesearchButton" src="{{ asset('voicesearchicon.png') }}" alt="v" onclick=record()>
                  <input type="text" class="searchTerm" id="searchtext" name="searchtext" spellcheck="true" autocomplete="on" placeholder="What are you looking for?">
                  <button type="submit" class="searchButton">
                    <i class="fa fa-search"></i>
                  </button>
                   <script>
                       function record(){
                           var recognition = new webkitSpeechRecognition();
                           recognition.lang = "en-US";
                           console.log("speech recog");
                           recognition.onresult = function (event) {
                               console.log(event);
                               document.getElementById('searchtext').value = event.results[0][0].transcript;
                           }
                           recognition.start();
                       }
                   </script>
               </div>
            </div>
         </fieldset>
          <!-- partial -->
      </form>
  </div>

</body>
</html>
