import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import TextPage from "./pages/Standard_Form_Page/TextPage";
import ButtonPage from "./pages/Standard_Form_Page/ButtonPage";
import PasswordPage from "./pages/Standard_Form_Page/PasswordPage";
import EmailPage from "./pages/Standard_Form_Page/EmailPage";
import NumberPage from "./pages/Standard_Form_Page/NumberPage";
import SearchPage from "./pages/Standard_Form_Page/SearchPage";
import URLPage from "./pages/Standard_Form_Page/URLPage";
import TelPage from "./pages/Standard_Form_Page/TelPage";
import DatePickerPage from "./pages/Standard_Form_Page/DatePickerPage";
import TimePickerPage from "./pages/Standard_Form_Page/TimePickerPage";
import DateTimePickerPage from "./pages/Standard_Form_Page/DateTimePickerPage";
import ColorPickerPage from "./pages/Standard_Form_Page/ColorPickerPage";
import RangeSliderPage from "./pages/Standard_Form_Page/RangeSliderPage";
import FileUploadPage from "./pages/Standard_Form_Page/FileUploadPage";
import SelectPage from "./pages/Choice&SelectionPage/SelectPage";
import CheckBoxPage from "./pages/Choice&SelectionPage/CheckBoxPage";
import MultiSelectPage from "./pages/Choice&SelectionPage/MultiSelectPage";
import RadioGroupPage from "./pages/Choice&SelectionPage/RadioGroupPage";
import ToggleSwitchPage from "./pages/Choice&SelectionPage/ToggleSwitchPage";
import TextAreaPage from "./pages/Textual&AdvancedPage/TextAreaPage";
import OTPPage from "./pages/Interactive&UtilityPage/OTPPage";
import CaptchaPage from "./pages/Interactive&UtilityPage/CaptchaPage";
import SliderPage from "./pages/Interactive&UtilityPage/SliderPage";
import RatingInputPage from "./pages/Interactive&UtilityPage/RatingInputPage";
import SearchBarPage from "./pages/Interactive&UtilityPage/SearchBarPage";
import FileDragDropPage from "./pages/Interactive&UtilityPage/FileDragDropPage";
import CurrencyInputPage from "./pages/BusinessInputPage/CurrencyInputPage";
import PinCodePage from "./pages/BusinessInputPage/PinCodePage";
import CreditCardPage from "./pages/BusinessInputPage/CreditCardPage";
import AddressPage from "./pages/BusinessInputPage/AddressPage";
import DateRangePickerPage from "./pages/BusinessInputPage/DateRangePickerPage";
import TimeDurationPickerPage from "./pages/BusinessInputPage/TimeDurationPickerPage";
import LabelPage from "./pages/UIHelpersPage/LabelPage";
import HelperTextPage from "./pages/UIHelpersPage/HelperTextPage";
import ErrorTextPage from "./pages/UIHelpersPage/ErrorTextPage";
import IconAdornmentPage from "./pages/UIHelpersPage/IconAdornmentPage";

function App(){
  return(
  <Router>
    <Routes>
      <Route path="/" element={
    <nav className="p-4 bg-gray-100 flex justify-center flex-col items-center p-4">
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline" to="/text">
      TextInput
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/button">
      Button
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/password">
      PasswordInput
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/email">
      EmailInput
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4"  to="/number">
      NumberInput
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/search">
      SearchInput
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/url">
      URLInput
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/tel">
      TelInput
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/datepicker">
      DatePicker
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/timepicker">
      TimePicker
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/datetimepicker">
      DateTimePicker
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/colorpicker">
      ColorPicker
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/rangeslider">
      RangeSlider
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="fileupload/">
      FileUpload
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/select" >
      Select
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/checkbox">
      CheckBox
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/multiselect">
      MultiSelect
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/radio">
      Radio Group
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/toggle_switch">
      ToggleSwitch
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/text_area">
      TextArea
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/otp">
      OTP
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/captcha">
      Captcha
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/slider">
      Slider
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/rating">
      Rating Input
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/searchbar" >
      SearchBar
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/filedragdrop">
      File Drag & Drop</Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/currency_input">
      Currency Input
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/pincode">
      PIN Code
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:undreline mt-4" to="/credit_card">
      Credit Card
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/address">
      Addresses
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/date_range_picker">
      DateRangePicker
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/time_duration">
      Time Duration Picker
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/label">
      Label
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/helper_text" >
      Helper Text
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/error_text">
      Error Text
      </Link>
      <Link className="w-full p-4 flex justify-center items-center text-white text-2xl bg-blue-300 font-medium hover:underline mt-4" to="/icon_adornment" >
      Icon Adornment
      </Link>
      
      
    </nav>} 
    />
      <Route path="/text" element={<TextPage />} />
      <Route path="/button" element={<ButtonPage />}/>
      <Route path="/password" element={<PasswordPage />}/>
      <Route path="/email" element={<EmailPage />} />
      <Route path="/number" element={<NumberPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/url" element={<URLPage />} />
      <Route path="/tel" element={<TelPage />} />
      <Route path="/datepicker" element={<DatePickerPage />} />
      <Route path="/timepicker" element={<TimePickerPage />} />
      <Route path="/datetimepicker" element={<DateTimePickerPage />} />
      <Route path="/colorpicker" element={<ColorPickerPage />} />
      <Route path="/rangeslider" element={<RangeSliderPage />}/>
      <Route path="/fileupload" element={<FileUploadPage />} />
      <Route path="/select" element={<SelectPage/>} />
      <Route path="/checkbox" element={<CheckBoxPage />} />
      <Route path="/multiselect" element={<MultiSelectPage />} />
      <Route path="/radio" element={<RadioGroupPage />} />
      <Route path="/toggle_switch" element={<ToggleSwitchPage />} />
      <Route path="/text_area" element={<TextAreaPage/>} />
      <Route path="/otp" element={<OTPPage />} />
      <Route path="/captcha" element ={<CaptchaPage />} />
      <Route path="/slider" element={<SliderPage />} />
      <Route path="/rating" element={<RatingInputPage />} />
      <Route path="/searchbar" element={<SearchBarPage />} />
      <Route path="/filedragdrop" element={<FileDragDropPage />} />
      <Route path="/currency_input" element={<CurrencyInputPage />} />
      <Route path="/pincode" element={<PinCodePage />} />
      <Route path="/credit_card" element={<CreditCardPage />} />
      <Route path="/address" element={<AddressPage />} />
      <Route path="/date_range_picker" element={<DateRangePickerPage />} />
      <Route path="/time_duration" element={<TimeDurationPickerPage />} />
      <Route path="/label" element={<LabelPage />} />
      <Route path="/helper_text" element={<HelperTextPage />} />
      <Route path="/error_text" element={<ErrorTextPage />} />
      <Route path="/icon_adornment" element={<IconAdornmentPage />} />
      </Routes>
  </Router>
  );

}

export default App;