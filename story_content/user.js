function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6aAcJ8MqXZ0":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var selectedValue = player.GetVar("SelectedValue");
var commitmentAction = player.GetVar("CommitmentAction");
var challenge = player.GetVar("PlanChallenge");
var response = player.GetVar("PlanResponse");
var startDate = player.GetVar("PlanStartDate");
var targetDate = player.GetVar("PlanTargetDate");

var myWindow = window.open("", "ActionPlan");

var contents = `
<html>
<head>
<title>My Action Plan</title>

<style>
body{
font-family: Arial, sans-serif;
padding:40px;
line-height:1.6;
}

h1{
color:#d7282f;
}

.section{
margin-bottom:20px;
}

.label{
font-weight:bold;
color:#d7282f;
margin-bottom:5px;
}
</style>

</head>

<body>

<h1>My Action Plan</h1>

<div class="section">
<div class="label">Selected Value</div>
<div>${selectedValue}</div>
</div>

<div class="section">
<div class="label">My Commitment</div>
<div>${commitmentAction}</div>
</div>

<div class="section">
<div class="label">What Could Get In The Way?</div>
<div>${challenge}</div>
</div>

<div class="section">
<div class="label">How Will You Handle It?</div>
<div>${response}</div>
</div>

<div class="section">
<div class="label">Start Date</div>
<div>${startDate}</div>
</div>

<div class="section">
<div class="label">Target Completion Date</div>
<div>${targetDate}</div>
</div>

</body>
</html>
`;

myWindow.document.write(contents);
myWindow.document.close();

myWindow.print();
}

