<html lang="en" >
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/searchbox.css">
  <link rel="stylesheet" href="css/main.css">

</head>
<body>
  <div class="s004">
      <form method="POST" action="{{ route('searchresults') }}">
          @csrf
          <!-- partial:index.partial.html -->
          <fieldset>
            <div class="wrapp">
               <div class="search">
                  <input type="text" class="searchTerm" name="searchtext" placeholder="What are you looking for?">
                  <button type="submit" class="searchButton">
                    <i class="fa fa-search"></i>
                 </button>
               </div>
            </div>
         </fieldset>
          <!-- partial -->
      </form>
  </div>
</body>
</html>
