<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Paul's Training Videos</title>
    <link href="../Content/bootstrap.css" rel="stylesheet" />

    <script src="../Scripts/jquery-1.11.0.min.js"></script>
    <script src="../Scripts/bootstrap.min.js"></script>
</head>
<body>
@auth()
    @if(auth()->user()->email == 'admin@gmail.com')

<div class="container">
    <div class="row">
        <div class="col-sm-6">
            <h2>Pending Requests</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6">

                    <table id="productTable"
                           class="table table-bordered table-condensed table-striped">
                        <thead>
                        <tr>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>

                        @foreach($users as $user)
                            <form method="POST" action="#" >
                            <tr>
                                <td>{{$user->email}}</td>
                                <td>{{$user->name}}</td>
                                <td>
                                    <button type="submit" onclick="productDelete(this) " >
                                        <span class='glyphicon glyphicon-plus' />
                                        <?php
                                            \Illuminate\Support\Facades\Session::put('userid',$user->id);
                                            ?>
                                    </button>
                                </td>
                            </tr>
                            </form>
                        @endforeach
                    @endif

                @endauth
                </thead>
            </table>
        </div>
    </div>

</div>
<script>
    // Delete product from <table>
    function productDelete(ctl) {
        <?php
            $iid = \Illuminate\Support\Facades\Session::get('userid');
            \Illuminate\Support\Facades\Session::remove('userid');
            \Illuminate\Support\Facades\DB::update("Update users set admin_verified = 1 where id = '$iid' ");
            ?>
        $(ctl).parents('tr').remove();
    }
</script>
</body>
</html>
