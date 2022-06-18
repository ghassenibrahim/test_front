export class DateFormats {
  public static EN_FORMATS = {
    parseInput: 'DD',//??
    fullPickerInput: 'MM/DD/YYYY h:mm A', // date time 'LLL' = > September 4, 1986 8:30 PM
    datePickerInput: 'MM/DD/YYYY', // date 'L'	=> 09/04/1986
    timePickerInput: 'h:mm A', // time
    monthYearLabel: 'MMM YYYY', // year label in popup
    dateA11yLabel: 'DD/MM/YYYY HH:mm',//??
    monthYearA11yLabel: 'DD',//??
  };
  public static FR_FORMATS = {
    parseInput: 'DD',
    fullPickerInput: 'DD/MM/YYYY HH:mm',
    datePickerInput: 'DD/MM/YYYY',
    timePickerInput: 'HH:mm',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY HH:mm',
    monthYearA11yLabel: 'DD',
  };
}
