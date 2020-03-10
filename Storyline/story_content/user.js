function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hVOY7BhFJ7":
        Script1();
        break;
  }
}

function Script1()
{
  var number=Math.floor((Math.random()*6)+1);
GetPlayer().SetVar("RandomNumber",number);
}

