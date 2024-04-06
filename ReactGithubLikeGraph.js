"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("./component.css");
var _react = require("react");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ReactGithubLikeGraph = function ReactGithubLikeGraph(_ref) {
  var dataset = _ref.dataset;
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    datesOf2024 = _useState2[0],
    setDatesOd2024 = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    year = _useState4[0],
    setYear = _useState4[1];
  var _useState5 = (0, _react.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    givenYears = _useState6[0],
    setgivenYears = _useState6[1];
  (0, _react.useEffect)(function () {
    var yrs = getYears(dataset);
    setgivenYears(yrs);
    setYear(yrs[0]);
    setDatesOd2024(getDatesOfYear(yrs[0]));
  }, []);
  function getDatesOfYear(year) {
    var datesOfYear = [];
    for (var month = 0; month < 12; month++) {
      var daysInMonth = new Date(year, month + 1, 0).getDate();
      for (var day = 1; day <= daysInMonth; day++) {
        var currentDate = new Date(year, month, day).valueOf();
        var dataToPush = {
          currentDate: currentDate,
          type: 'none'
        };
        var givenDate = new Date(currentDate);
        var flag = isSameDate(givenDate);
        if (flag.success) dataToPush.type = dataset[flag.index].type;
        datesOfYear.push(dataToPush);
      }
    }
    return datesOfYear;
  }
  function formatDate(milliseconds) {
    var date = new Date(milliseconds);
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString('en-GB', options);
  }
  function getYears(dataset) {
    var years = [];
    dataset === null || dataset === void 0 || dataset.forEach(function (item) {
      var year = new Date(item.date).getFullYear();
      if (!years.includes(year)) {
        years.push(year);
      }
    });
    years.sort(function (a, b) {
      return a - b;
    });
    return years;
  }
  function isSameDate(dateToCheck) {
    for (var i = 0; i < dataset.length; i++) {
      var currentDate = new Date(dataset[i].date);
      if ("".concat(dateToCheck.getDate(), "-").concat(dateToCheck.getMonth() + 1, "-").concat(dateToCheck.getFullYear()) === "".concat(currentDate.getDate(), "-").concat(currentDate.getMonth() + 1, "-").concat(currentDate.getFullYear())) {
        return {
          success: true,
          index: i
        };
      }
    }
    return {
      success: false
    };
  }
  var yearChange = function yearChange(event) {
    var selectedValue = parseInt(event.target.value);
    setDatesOd2024(getDatesOfYear(selectedValue));
  };
  var AllMonths = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return /*#__PURE__*/React.createElement("div", {
    className: "zoopsjdbf"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zoopuyergbuwe"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zoophusberivyush"
  }, "MON"), /*#__PURE__*/React.createElement("div", {
    className: "zoophusberivyush"
  }, "WED"), /*#__PURE__*/React.createElement("div", {
    className: "zoophusberivyush"
  }, "FRI")), /*#__PURE__*/React.createElement("div", {
    className: "zoopmnuweuuec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zoopmnuweuuecopiunm"
  }, AllMonths.map(function (ele, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "zoopkallMonths"
    }, ele);
  })), /*#__PURE__*/React.createElement("div", {
    className: "zoopmnuweuuecreqxztumec"
  }, datesOf2024 === null || datesOf2024 === void 0 ? void 0 : datesOf2024.map(function (ele, idx) {
    return /*#__PURE__*/React.createElement("div", {
      className: "zoop_OneBox",
      key: idx,
      style: {
        background: "".concat((ele === null || ele === void 0 ? void 0 : ele.type) == 'less' ? "#9be9a8" : (ele === null || ele === void 0 ? void 0 : ele.type) == "medium" ? "#40c463" : (ele === null || ele === void 0 ? void 0 : ele.type) == "upper-medium" ? "30a14e" : (ele === null || ele === void 0 ? void 0 : ele.type) == 'hard' ? "#216e39" : "#ebedf0")
      },
      title: "".concat(ele.type, " on ").concat(formatDate(ele.currentDate))
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "zoopmnuweuuechhxfhkwecjhsb"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: "4px",
      marginRight: '7px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "OneBoxOne"
  }), /*#__PURE__*/React.createElement("div", {
    className: "OneBoxTwo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "OneBoxThree"
  }), /*#__PURE__*/React.createElement("div", {
    className: "OneBoxFour"
  }), /*#__PURE__*/React.createElement("div", {
    className: "OneBoxFive"
  })), /*#__PURE__*/React.createElement("select", {
    id: "ZoopyearSelect",
    onChange: yearChange
  }, givenYears === null || givenYears === void 0 ? void 0 : givenYears.map(function (ele, idx) {
    return /*#__PURE__*/React.createElement("option", {
      key: idx,
      value: ele
    }, "YEAR ".concat(ele));
  })))));
};
var _default = exports["default"] = ReactGithubLikeGraph;
