var style_prices = new Array();
style_prices["classic"]=3;
style_prices["premium"]=5;
style_prices["royal"]=10;

var tip_prices = new Array();
tip_prices["ten"]=10;
tip_prices["fifteen"]=15;
tip_prices["twenty"]=20;


function getStylePrice() 
{
	var stylePrice=0;

	var theForm = document.forms["request"];

	var style = theForm.elements ["style"];

	for(var i = 0; i < style.length; i++)
	{

		if(style[i].checked)
		{

			stylePrice = style_prices[style[i].value];
			
			break;
		}
	}

			return stylePrice;
}



function getTipPrice()
{
	var tipPrice=0;
	var theForm=document.forms["request"];
	var tip = theForm.elements ["tip"];
	
	for (var i=0; i<tip.length; i++)
	{
		if(tip[i].checked)
		{
			tipPrice = tip_prices[tip[i].value];

			break;
		}
	}
		return tipPrice;
}


function calculateTotal()
{
	var requestPrice = getStylePrice() + (getStylePrice()*getTipPrice()/100);
	
	var divobj = document.getElementById('TotalPrice');
	divobj.style.display ='block';
	divobj.innerHTML = "Total: $"+requestPrice;
}

function hidetotal()
{
	var divobj = document.getElementById('TotalPrice');
	divobj.style.display='none';
}


