//// User inputs //////////////////////////////////////////////
function returnText() {
             
    let numberCows = document.getElementById('numberOfCows').value;
    let squareFeet = document.getElementById('squareFeet').value;
    let percent = document.getElementById('percent').value;
    
  ///// default inputs ///////////////
    let annualElectricityConsumption = document.getElementById('annualElectricityInput').value;
    if (annualElectricityConsumption === '') {
      annualElectricityConsumption = 991.283*numberCows**0.932; 
      ///switch name to add Consumption when ready
    }
      let loanInterest = document.getElementById('loanInterestInput').value;
    if (loanInterest === '') {
      loanInterest = 5.34; 
    }
      let loanInterestRate = loanInterest / 100;
    
      let loanDuration = document.getElementById('loanDurationInput').value;
    if (loanDuration === '') {
      loanDuration = 25; // lifespan of panels
    }
        let loanPercentage = document.getElementById('loanPercentageInput').value;
    if (loanPercentage === '') {
      loanPercentage = 100; 
    }
  
  
  //// Energy generation /////////////////////////////////////////
    //let annualElectricityConsumption = 110332; //kWh
  let annualGeneration = (percent/100)*annualElectricityConsumption;
  let hourlyGeneration = annualGeneration*(1/365)*(1/24);
  
  //// Number and type of panels ///////////////////////////////
  let peakSunlight = 4.1;
  let numberSmallPanels = (1000*hourlyGeneration*peakSunlight)/150;
  let numberLargePanels = (1000*hourlyGeneration*peakSunlight)/370;
  const smallDimension = 10.47; // square feet 
  const largeDimension = 18.61; // square feet
  let smallConfiguration = numberSmallPanels*smallDimension
  let largeConfiguration = numberLargePanels*largeDimension
  let numberPanels = (smallConfiguration<=squareFeet) ? numberSmallPanels : numberLargePanels;
  let panelWattage = (smallConfiguration<=squareFeet) ? 150 : 370; // if small panels chosen, wattage is 150
  let panelConfiguration = (smallConfiguration<=squareFeet) ? smallConfiguration : largeConfiguration; 
  if (panelConfiguration > squareFeet) {
    alert("To produce that much electricity, the size of this solar array will need to be larger than the square footage you have available. See Total Panel Configuration to see how many square feet it would require. Then refresh the page and try a smaller percent of your electricity consumption, or find more space that could hold solar panels to increase your square footage.")
  }
  if (panelConfiguration < squareFeet) {
    alert("Please scroll down to see the results")
  }  

  //// Cost of installation //////////////////////////////////////
  let systemSize = numberPanels * panelWattage;
  let costPerWatt = (systemSize<="20000") ? "2.95":"1.84"; 
  let installationCost = systemSize * costPerWatt;
  
  //// Economic Equations Values ////////////////////////////////
  const lifespan = 25; // years
  const interestRate = 0.03; // 3%
  const salvageValue = 0; // assumed value after 25 years
  let annualDepreciation = (installationCost-salvageValue)/lifespan; //straightline depreciation
  let annualInsurance = installationCost*0.0025; 
  const annualDegradation = 0.005; //.5% per year
  const annualMaintenance = 17*systemSize/1000; //maintenance cost per year
  const taxCredit30 = 0.3*installationCost; //30% of installation cost occurring in year 1
  const taxCredit15 = 0.15*installationCost; // 15% of install cost year 1
  const taxCredit0 = 0*installationCost; //no tax credit year 1
  
  //// yearly electricity rates increasing by 2.96% per year ///////////////////////////////
    let electricityRate1 = 0.16;
    let electricityRate2 = 1.0296*electricityRate1;
    let electricityRate3 = 1.0296*electricityRate2;
    let electricityRate4 = 1.0296*electricityRate3;
    let electricityRate5 = 1.0296*electricityRate4;
    let electricityRate6 = 1.0296*electricityRate5;
    let electricityRate7 = 1.0296*electricityRate6;
    let electricityRate8 = 1.023*electricityRate7;
    let electricityRate9 = 1.0296*electricityRate8;
    let electricityRate10 = 1.0296*electricityRate9;
    let electricityRate11 = 1.0296*electricityRate10;
    let electricityRate12 = 1.0296*electricityRate11;
    let electricityRate13 = 1.0296*electricityRate12;
    let electricityRate14 = 1.0296*electricityRate13;
    let electricityRate15 = 1.0296*electricityRate14;
    let electricityRate16 = 1.0296*electricityRate15;
    let electricityRate17 = 1.0296*electricityRate16;
    let electricityRate18 = 1.0296*electricityRate17;
    let electricityRate19 = 1.0296*electricityRate18;
    let electricityRate20 = 1.0296*electricityRate19;
    let electricityRate21 = 1.0296*electricityRate20;
    let electricityRate22 = 1.0296*electricityRate21;
    let electricityRate23 = 1.0296*electricityRate22;
    let electricityRate24 = 1.0296*electricityRate23;
    let electricityRate25 = 1.0296*electricityRate24;
  //// yearly electricity generation factoring in degradation ///////////////////////////
    let generation1 = annualGeneration;
    let generation2 = generation1*(1-annualDegradation);
    let generation3 = generation2*(1-annualDegradation);
    let generation4 = generation3*(1-annualDegradation);
    let generation5 = generation4*(1-annualDegradation);
    let generation6 = generation5*(1-annualDegradation);
    let generation7 = generation6*(1-annualDegradation);
    let generation8 = generation7*(1-annualDegradation);
    let generation9 = generation8*(1-annualDegradation);
    let generation10 = generation9*(1-annualDegradation);
    let generation11 = generation10*(1-annualDegradation);
    let generation12 = generation11*(1-annualDegradation);
    let generation13 = generation12*(1-annualDegradation);
    let generation14 = generation13*(1-annualDegradation);
    let generation15 = generation14*(1-annualDegradation);
    let generation16 = generation15*(1-annualDegradation);
    let generation17 = generation16*(1-annualDegradation);
    let generation18 = generation17*(1-annualDegradation);
    let generation19 = generation18*(1-annualDegradation);
    let generation20 = generation19*(1-annualDegradation);
    let generation21 = generation20*(1-annualDegradation);
    let generation22 = generation21*(1-annualDegradation);
    let generation23 = generation22*(1-annualDegradation);
    let generation24 = generation23*(1-annualDegradation);
    let generation25 = generation24*(1-annualDegradation);
    
  ///// cumulative cashflow by year ////////////////////////////////////////////////////////////
    let cashFlow0 = 0-installationCost-annualInsurance;
    let cashFlow1 = cashFlow0+(electricityRate1*generation1+taxCredit30)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow2 = cashFlow1+(electricityRate2*generation2)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow3 = cashFlow2+(electricityRate3*generation3)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow4 = cashFlow3+(electricityRate4*generation4)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow5 = cashFlow4+(electricityRate5*generation5)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow6 = cashFlow5+(electricityRate6*generation6)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow7 = cashFlow6+(electricityRate7*generation7)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow8 = cashFlow7+(electricityRate8*generation8)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow9 = cashFlow8+(electricityRate9*generation9)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow10 = cashFlow9+(electricityRate10*generation10)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow11 = cashFlow10+(electricityRate11*generation11)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow12 = cashFlow11+(electricityRate12*generation12)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow13 = cashFlow12+(electricityRate13*generation13)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow14 = cashFlow13+(electricityRate14*generation14)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow15 = cashFlow14+(electricityRate15*generation15)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow16 = cashFlow15+(electricityRate16*generation16)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow17 = cashFlow16+(electricityRate17*generation17)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow18 = cashFlow17+(electricityRate18*generation18)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow19 = cashFlow18+(electricityRate19*generation19)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow20 = cashFlow19+(electricityRate20*generation20)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow21 = cashFlow20+(electricityRate21*generation21)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow22 = cashFlow21+(electricityRate22*generation22)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow23 = cashFlow22+(electricityRate23*generation23)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow24 = cashFlow23+(electricityRate24*generation24)-annualInsurance-annualMaintenance-annualDepreciation;
    let cashFlow25 = cashFlow24+(electricityRate25*generation25)-annualInsurance-annualMaintenance-annualDepreciation;
   
   //// tax credit of 15% installation costs ////////////////////////////////////////////////
    let tax15cashFlow1 = cashFlow0+(electricityRate1*generation1+taxCredit15)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow2 = tax15cashFlow1+(electricityRate2*generation2)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow3 = tax15cashFlow2+(electricityRate3*generation3)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow4 = tax15cashFlow3+(electricityRate4*generation4)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow5 = tax15cashFlow4+(electricityRate5*generation5)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow6 = tax15cashFlow5+(electricityRate6*generation6)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow7 = tax15cashFlow6+(electricityRate7*generation7)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow8 = tax15cashFlow7+(electricityRate8*generation8)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow9 = tax15cashFlow8+(electricityRate9*generation9)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow10 = tax15cashFlow9+(electricityRate10*generation10)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow11 = tax15cashFlow10+(electricityRate11*generation11)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow12 = tax15cashFlow11+(electricityRate13*generation13)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow13 = tax15cashFlow12+(electricityRate13*generation13)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow14 = tax15cashFlow13+(electricityRate14*generation14)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow15 = tax15cashFlow14+(electricityRate15*generation15)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow16 = tax15cashFlow15+(electricityRate16*generation16)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow17 = tax15cashFlow16+(electricityRate17*generation17)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow18 = tax15cashFlow17+(electricityRate18*generation18)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow19 = tax15cashFlow18+(electricityRate19*generation19)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow20 = tax15cashFlow19+(electricityRate20*generation20)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow21 = tax15cashFlow20+(electricityRate21*generation21)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow22 = tax15cashFlow21+(electricityRate22*generation22)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow23 = tax15cashFlow22+(electricityRate23*generation23)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow24 = tax15cashFlow23+(electricityRate24*generation24)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax15cashFlow25 = tax15cashFlow24+(electricityRate25*generation25)-annualInsurance-annualMaintenance-annualDepreciation;
   //// no tax credit //////////////////////////////////////////////////////////////
      let tax0cashFlow1 = cashFlow0+(electricityRate1*generation1+taxCredit0)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow2 = tax0cashFlow1+(electricityRate2*generation2)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow3 = tax0cashFlow2+(electricityRate3*generation3)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow4 = tax0cashFlow3+(electricityRate4*generation4)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow5 = tax0cashFlow4+(electricityRate5*generation5)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow6 = tax0cashFlow5+(electricityRate6*generation6)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow7 = tax0cashFlow6+(electricityRate7*generation7)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow8 = tax0cashFlow7+(electricityRate8*generation8)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow9 = tax0cashFlow8+(electricityRate9*generation9)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow10 = tax0cashFlow9+(electricityRate10*generation10)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow11 = tax0cashFlow10+(electricityRate11*generation11)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow12 = tax0cashFlow11+(electricityRate12*generation12)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow13 = tax0cashFlow12+(electricityRate13*generation13)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow14 = tax0cashFlow13+(electricityRate14*generation14)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow15 = tax0cashFlow14+(electricityRate15*generation15)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow16 = tax0cashFlow15+(electricityRate16*generation16)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow17 = tax0cashFlow16+(electricityRate17*generation17)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow18 = tax0cashFlow17+(electricityRate18*generation18)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow19 = tax0cashFlow18+(electricityRate19*generation19)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow20 = tax0cashFlow19+(electricityRate20*generation20)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow21 = tax0cashFlow20+(electricityRate21*generation21)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow22 = tax0cashFlow21+(electricityRate21*generation21)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow23 = tax0cashFlow22+(electricityRate23*generation23)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow24 = tax0cashFlow23+(electricityRate24*generation24)-annualInsurance-annualMaintenance-annualDepreciation;
    let tax0cashFlow25 = tax0cashFlow24+(electricityRate25*generation25)-annualInsurance-annualMaintenance-annualDepreciation;
  
  
  //// present value benefits ////////////////////////////////////////////////////////////////
    let benefit0 = 0;
    let benefit1 = (electricityRate1*generation1+taxCredit30)/((1+interestRate)**1);
    let benefit2 = (electricityRate2*generation2)/((1+interestRate)**2);
    let benefit3 = (electricityRate3*generation3)/((1+interestRate)**3);
    let benefit4 = (electricityRate4*generation4)/((1+interestRate)**4);
    let benefit5 = (electricityRate5*generation5)/((1+interestRate)**5);
    let benefit6 = (electricityRate6*generation6)/((1+interestRate)**6);
    let benefit7 = (electricityRate7*generation7)/((1+interestRate)**7);
    let benefit8 = (electricityRate8*generation8)/((1+interestRate)**8);
    let benefit9 = (electricityRate9*generation9)/((1+interestRate)**9);
    let benefit10 = (electricityRate10*generation10)/((1+interestRate)**10);
    let benefit11 = (electricityRate11*generation11)/((1+interestRate)**11);
    let benefit12 = (electricityRate12*generation12)/((1+interestRate)**12);
    let benefit13 = (electricityRate13*generation13)/((1+interestRate)**13);
    let benefit14 = (electricityRate14*generation14)/((1+interestRate)**14);
    let benefit15 = (electricityRate15*generation15)/((1+interestRate)**15);
    let benefit16 = (electricityRate16*generation16)/((1+interestRate)**16);
    let benefit17 = (electricityRate17*generation17)/((1+interestRate)**17);
    let benefit18 = (electricityRate18*generation18)/((1+interestRate)**18);
    let benefit19 = (electricityRate19*generation19)/((1+interestRate)**19);
    let benefit20 = (electricityRate20*generation20)/((1+interestRate)**20);
    let benefit21 = (electricityRate21*generation21)/((1+interestRate)**21);
    let benefit22 = (electricityRate22*generation22)/((1+interestRate)**22);
    let benefit23 = (electricityRate23*generation23)/((1+interestRate)**23);
    let benefit24 = (electricityRate24*generation24)/((1+interestRate)**24);
    let benefit25 = (electricityRate25*generation25)/((1+interestRate)**25);
  
    let presentBenefitTotal = benefit1+benefit2+benefit3+benefit4+benefit5+benefit6+benefit7+benefit8+benefit9+benefit10+benefit11+benefit12+benefit13+benefit14+benefit15+benefit16+benefit17+benefit18+benefit19+benefit20+benefit21+benefit22+benefit23+benefit24+benefit25;
  
    //// present value costs  ////////////////////////////////////////////////////////////////////////
    let cost0 = (installationCost+annualInsurance)/((1+interestRate)**0);
    let cost1 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**1);
    let cost2 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**2);
    let cost3 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**3);
    let cost4 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**4);
    let cost5 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**5);
    let cost6 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**6);
    let cost7 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**7);
    let cost8 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**8);
    let cost9 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**9);
    let cost10 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**10);
    let cost11 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**11);
    let cost12 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**12);
    let cost13 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**13);
    let cost14 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**14);
    let cost15 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**15);
    let cost16 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**16);
    let cost17 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**17);
    let cost18 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**18);
    let cost19 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**19);
    let cost20 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**20);
    let cost21 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**21);
    let cost22 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**22);
    let cost23 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**23);
    let cost24 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**24);
    let cost25 = (annualInsurance+annualMaintenance+annualDepreciation)/((1+interestRate)**25);
  
  let presentCostTotal = cost0+cost1+cost2+cost3+cost4+cost5+cost6+cost7+cost8+cost9+cost10+cost11+cost12+cost13+cost14+ cost15+cost16+cost17+cost18+cost19+cost20+cost21+cost22+cost23+cost24+cost25;
  
    ///////// econ evaluation criteria calculations ///////////////////////////////////////////////
    let netPresentValue = presentBenefitTotal-presentCostTotal;
    let benefitCostRatio = presentBenefitTotal / presentCostTotal;
    let paybackPeriod = (installationCost / (benefit2));
    let equivalentAnnualWorth = netPresentValue * ((interestRate) / (1-(1+interestRate)**(-lifespan))); 
    
  //// discounted cumulative cash flow by year //////////////////////////////////////////////////
    let discountCash0 = benefit0-cost0;
    let discountCash1 = discountCash0+benefit1-cost1;
    let discountCash2 = discountCash1+benefit2-cost2;
    let discountCash3 = discountCash2+benefit3-cost3;
    let discountCash4 = discountCash3+benefit4-cost4;
    let discountCash5 = discountCash4+benefit5-cost5;
    let discountCash6 = discountCash5+benefit6-cost6;
    let discountCash7 = discountCash6+benefit7-cost7;
    let discountCash8 = discountCash7+benefit8-cost8;
    let discountCash9 = discountCash8+benefit9-cost9;
    let discountCash10 = discountCash9+benefit10-cost10;
    let discountCash11= discountCash10+benefit11-cost11;
    let discountCash12 = discountCash11+benefit12-cost12;
    let discountCash13 = discountCash12+benefit13-cost13;
    let discountCash14 = discountCash13+benefit14-cost14;
    let discountCash15 = discountCash14+benefit15-cost15;
    let discountCash16 = discountCash15+benefit16-cost16;
    let discountCash17 = discountCash16+benefit17-cost17;
    let discountCash18 = discountCash17+benefit18-cost18;
    let discountCash19 = discountCash18+benefit19-cost19;
    let discountCash20 = discountCash19+benefit20-cost20;
    let discountCash21 = discountCash20+benefit21-cost21;
    let discountCash22 = discountCash21+benefit22-cost22;
    let discountCash23 = discountCash22+benefit23-cost23;
    let discountCash24 = discountCash23+benefit24-cost24;
    let discountCash25 = discountCash24+benefit25-cost25;
    
  ////// Loan Calculations /////////////////////////////////////////////////////////////////////
    
    let loanAmount = (loanPercentage *0.01) * installationCost; // principal
    let yearlyPayment = (loanAmount*loanInterestRate) / ((1-(1+loanInterestRate)**(-loanDuration)));
    let monthlyPayment = yearlyPayment / 12;
    
    function calculateAnnualLoanPayment(loanAmount, loanInterestRate, loanDuration) {
    let numberOfPayments = loanDuration;
    let numerator = loanAmount * loanInterestRate;
    let denominator = (1-(1+loanInterestRate)**(-numberOfPayments));
    let annualLoanPayment = numerator / denominator;
    return annualLoanPayment;
  }
    function createLoanSchedule(loanAmount, loanInterestRate, loanDuration) {
    let numberOfPayments = loanDuration;
    let loanBalance = loanAmount;
    let loanPaymentAmount = calculateAnnualLoanPayment(loanAmount, loanInterestRate, loanDuration);
    let loanBalances = [loanAmount];
    let paymentAmounts = [0];
    
    for (let i = 1; i <= numberOfPayments; i++) {
      let interest = loanBalance * loanInterestRate;
      let principalPaid = loanPaymentAmount - interest;
      loanBalance -= principalPaid;
      
      loanBalances.push(loanBalance);
      paymentAmounts.push(loanPaymentAmount);
    }
    
    return {
      loanBalances: loanBalances,
      paymentAmounts: paymentAmounts
    };
  }
    
    
  ///////// Display results ///////////////////////////////////////////////////////////////////
    var numberCowsResult = document.getElementById("result1");
  numberCowsResult.innerHTML = numberCows;
      var squareFeetResult = document.getElementById("result2");
  squareFeetResult.innerHTML = squareFeet;
      var percentResult = document.getElementById("result3");
  percentResult.innerHTML = percent;
    
      var annualElectConsResult = document.getElementById("result4");
  annualElectConsResult.innerHTML = Math.round(annualElectricityConsumption);
      var annualGenResult = document.getElementById("result5");
  annualGenResult.innerHTML = Math.round(annualGeneration);
      var hourlyGenerationResult = document.getElementById("result6");
  hourlyGenerationResult.innerHTML = Math.round(hourlyGeneration);
    
    //var peakSunlightResult = document.getElementById("result7");
  //peakSunlightResult.innerHTML = peakSunlight;
   //   var numberSmallPanelsResult = document.getElementById("result8");
  //numberSmallPanelsResult.innerHTML = Math.round(numberSmallPanels);
   //   var numberLargePanelsResult = document.getElementById("result9");
  //numberLargePanelsResult.innerHTML = Math.round(numberLargePanels);
    //  var smallConfigResult = document.getElementById("result10");
  //smallConfigResult.innerHTML = Math.round(smallConfiguration);
    //var largeConfigResult = document.getElementById("result11");
  //largeConfigResult.innerHTML = Math.round(largeConfiguration);
      var configurationResult = document.getElementById("result11");
  configurationResult.innerHTML = Math.round(panelConfiguration);
      var numberPanelsResult = document.getElementById("result12");
  numberPanelsResult.innerHTML = Math.round(numberPanels);
      var panelWattageResult = document.getElementById("result13");
  panelWattageResult.innerHTML = Math.round(panelWattage);
      var systemSizeResult = document.getElementById("result14");
  systemSizeResult.innerHTML = Math.round(systemSize);
      var installationCostResult = document.getElementById("result15");
  installationCostResult.innerHTML = Math.round(installationCost);
  
    var paybackPeriodResult = document.getElementById("result16");
  paybackPeriodResult.innerHTML = Math.round(paybackPeriod);
    var netPresentValueResult = document.getElementById("result17");
  netPresentValueResult.innerHTML = Math.round(netPresentValue);
    var equivalentAnnualWorthResult = document.getElementById("result19");
  equivalentAnnualWorthResult.innerHTML = Math.round(equivalentAnnualWorth);
  //  var netPresentValueBenefitsResult = document.getElementById("result20");
  //netPresentValueBenefitsResult.innerHTML = Math.round(presentBenefitTotal);
   // var netPresentValueCostsResult = document.getElementById("result21");
  //netPresentValueCostsResult.innerHTML = Math.round(presentCostTotal);
    var benefitCostRatioResult = document.getElementById("result22");
  benefitCostRatioResult.innerHTML = benefitCostRatio;
    
    var loanAmountResult = document.getElementById("result23");
  loanAmountResult.innerHTML = Math.round(loanAmount);
    var loanInterestResult = document.getElementById("result24");
  loanInterestResult.innerHTML = loanInterest;
    var loanDurationResult = document.getElementById("result25");
  loanDurationResult.innerHTML = loanDuration;
    var annualLoanPaymentResult = document.getElementById("result26");
  annualLoanPaymentResult.innerHTML = Math.round(yearlyPayment);
    var monthlyLoanPaymentResult = document.getElementById("result27");
  monthlyLoanPaymentResult.innerHTML = Math.round(monthlyPayment);
    
  //// line graph of cash flows ///////////////////////////////////////////////////////////
    var cashFlowData = {
      labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"],
      datasets: [
          {
              label: "Cumulative Cash Flow",
              data: [cashFlow0, cashFlow1, cashFlow2, cashFlow3, cashFlow4, cashFlow5,cashFlow6, cashFlow7, cashFlow8, cashFlow9, cashFlow10,cashFlow11, cashFlow12, cashFlow13, cashFlow14, cashFlow15,cashFlow16, cashFlow17, cashFlow18, cashFlow19, cashFlow20,cashFlow21, cashFlow22, cashFlow23, cashFlow24, cashFlow25],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              lineTension: 0.1
          },
        {
              label: "Cash Flow in Present Value",
              data: [discountCash0, discountCash1, discountCash2, discountCash3, discountCash4, discountCash5,discountCash6, discountCash7, discountCash8, discountCash9, discountCash10,discountCash11, discountCash12, discountCash13, discountCash14, discountCash15,discountCash16, discountCash17, discountCash18, discountCash19, discountCash20,discountCash21, discountCash22, discountCash23, discountCash24, discountCash25],
              fill: false,
              borderColor: "rgb(255, 99, 132)",
              lineTension: 0.1
          },
              {
              label: "Breakeven Point",
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              fill: false,
              borderColor: "rgb(192,192,192)",
              lineTension: 0.05
          }]
  };
  
    var cumulativeCashFlow = document.getElementById('cashFlowChart').getContext('2d');
  var cashFlowChart = new Chart(cumulativeCashFlow, {
      type: 'line',
      data: cashFlowData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
         x: {
          display: true,
          title: {
            display: true,
            text: 'Years After Installation',
            color: '#939799',
            font: {
              family: 'Times',
              size: 20,
              weight: 'bold',
              lineHeight: 1.2,
            },
            padding: {top: 20, left: 0, right: 0, bottom: 0}
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Cash Flow (dollars)',
            color: '#939799',
            font: {
              family: 'Times',
              size: 20,
              weight: 'bold',
              lineHeight: 1.2
            },
            padding: {top: 30, left: 0, right: 0, bottom: 0}
          }
        }
      }
    },
  });
  
  /// graph comparing tax credits ////////////////////////////////////////////////////
    var taxCreditData = {
      labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"],
      datasets: [
          {
              label: "30% Tax Credit",
              data: [cashFlow0, cashFlow1, cashFlow2, cashFlow3, cashFlow4, cashFlow5,cashFlow6, cashFlow7, cashFlow8, cashFlow9, cashFlow10,cashFlow11, cashFlow12, cashFlow13, cashFlow14, cashFlow15,cashFlow16, cashFlow17, cashFlow18, cashFlow19, cashFlow20,cashFlow21, cashFlow22, cashFlow23, cashFlow24, cashFlow25],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              lineTension: 0.1
          },
        {
              label: "15% Tax Credit",
              data: [cashFlow0, tax15cashFlow1, tax15cashFlow2, tax15cashFlow3, tax15cashFlow4, tax15cashFlow5,tax15cashFlow6, tax15cashFlow7, tax15cashFlow8, tax15cashFlow9, tax15cashFlow10,tax15cashFlow11, tax15cashFlow12, tax15cashFlow13, tax15cashFlow14, tax15cashFlow15,tax15cashFlow16, tax15cashFlow17, tax15cashFlow18, tax15cashFlow19, tax15cashFlow20,tax15cashFlow21, tax15cashFlow22, tax15cashFlow23, tax15cashFlow24, tax15cashFlow25],
              fill: false,
              borderColor: "rgb(255, 99, 132)",
              lineTension: 0.1
          },
              {
              label: "No Tax Credit",
              data: [cashFlow0, tax0cashFlow1, tax0cashFlow2, tax0cashFlow3, tax0cashFlow4, tax0cashFlow5,tax0cashFlow6, tax0cashFlow7, tax0cashFlow8, tax0cashFlow9, tax0cashFlow10,tax0cashFlow11, tax0cashFlow12, tax0cashFlow13, tax0cashFlow14, tax0cashFlow15,tax0cashFlow16, tax0cashFlow17, tax0cashFlow18, tax0cashFlow19, tax0cashFlow20,tax0cashFlow21, tax0cashFlow22, tax0cashFlow23, tax0cashFlow24, tax0cashFlow25],
              fill: false,
              borderColor: "rgb(255, 165, 0)",
              lineTension: 0.1
          },
              {
              label: "Breakeven Point",
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              fill: false,
              borderColor: "rgb(192,192,192)",
              lineTension: 0.05
          }]
  };
  
    var taxCreditCashFlow = document.getElementById('taxCreditCashFlowChart').getContext('2d');
  var taxFlowChart = new Chart(taxCreditCashFlow, {
      type: 'line',
      data: taxCreditData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
         x: {
          display: true,
          title: {
            display: true,
            text: 'Years After Installation',
            color: '#939799',
            font: {
              family: 'Times',
              size: 20,
              weight: 'bold',
              lineHeight: 1.2,
            },
            padding: {top: 20, left: 0, right: 0, bottom: 0}
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Cash Flow (dollars)',
            color: '#939799',
            font: {
              family: 'Times',
              size: 20,
              weight: 'bold',
              lineHeight: 1.2
            },
            padding: {top: 30, left: 0, right: 0, bottom: 0}
          }
        }
      }
    },
  });
    
  ///// Loan Schedule graph ///////////////////////////////////////////////
    var loanSchedule = createLoanSchedule(loanAmount, loanInterestRate, loanDuration);
  var loanScheduleVisual = document.getElementById('loanChart').getContext('2d');
  var myChart = new Chart(loanScheduleVisual, {
      type: 'line',
      data: {
          labels: Array.from({ length: loanSchedule.paymentAmounts.length }, (_, i) => i + 1),
          datasets: [{
              label: 'Loan Balance',
              data: loanSchedule.loanBalances,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
          }, {
              label: 'Payment Amount',
              data: loanSchedule.paymentAmounts,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
          }]
      },
      options: {
        responsive: true, 
        //maintainAspectRatio: false,
        scales: {
                 x: {
                  display: true,
                  title: {
                    display: true,
                  text: 'Years After Installation',
                  color: '#939799',
                  font: {
                    family: 'Times',
                    size: 20,
                    weight: 'bold',
                    lineHeight: 1.2,
                  },
                  padding: {top: 20, left: 0, right: 0, bottom: 0}
                 }
             },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Dollars',
            color: '#939799',
            font: {
              family: 'Times',
              size: 20,
              weight: 'bold',
              lineHeight: 1.2
            },
            padding: {top: 30, left: 0, right: 0, bottom: 0}
          }
        }
      }
      }
  });
    
  //////////// Make graphs readable on phone screens ////////////////////////
  // cash flow graph
  const canvasCash = document.getElementById('cashFlowChart');
  const containerCash = document.getElementById('cashFlowChartContainer');

  // Set initial height based on 50% of the width
  canvasCash.style.height = `${(cashFlowChartContainer.offsetWidth * 0.6)}px`;

window.addEventListener('resize', () => {
    // Update height when window is resized
    canvasCash.style.height = `${(cashFlowChartContainer.offsetWidth * 0.6)}px`;
});


  //loan graph
  const canvas = document.getElementById('loanChart');
  const container = document.getElementById('loanChartContainer');

// Set initial height based on 50% of the width
 canvas.style.height = `${(loanChartContainer.offsetWidth * 0.5)}px`;

//window.addEventListener('resize', () => {
  // Update height when window is resized
   canvas.style.height = `${(loanChartContainer.offsetWidth * 0.5)}px`;
//});
    


  } //end bracket for function MUST BE AT THE END
  
  
  