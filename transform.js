function transform(line) {
    var values = line.split(',');
    var custObj = new Object();

    // Mapping values to the new schema
    custObj.FiscalYear = values[0];
    custObj.PayrollNumber = parseInt(values[1]);
    custObj.AgencyName = values[2];
    custObj.LastName = values[3];
    custObj.FirstName = values[4];
    custObj.MidInit = values[5];
    custObj.AgencyStartDate = values[6];
    custObj.WorkLocationBorough = values[7];
    custObj.TitleDescription = values[8];
    custObj.LeaveStatusAsOfJune30 = values[9];
    custObj.BaseSalary = parseFloat(values[10]);
    custObj.PayBasis = values[11];
    custObj.RegularHours = parseInt(values[12]);
    custObj.RegularGrossPaid = parseFloat(values[13]);
    custObj.OTHours = parseInt(values[14]);
    custObj.TotalOTPaid = parseFloat(values[15]);
    custObj.TotalOtherPay = parseFloat(values[16]);

    var outJson = JSON.stringify({ "BigQuery Schema": [custObj] });
    return outJson;
}