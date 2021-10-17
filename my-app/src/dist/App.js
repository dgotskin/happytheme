"use strict";
exports.__esModule = true;
//import '../node_modules/antd/lib/style/index.less';
require("./happytheme.less");
// App specific
//import './App.less';
//Components
var antd_1 = require("antd");
var antd_2 = require("antd");
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("h1", null, "Design system"),
        React.createElement("h3", null, "for Platform V"),
        React.createElement("div", { className: "colorplate" }, "Sky 1"),
        React.createElement("div", { className: "colorplate" }, "Sky 2"),
        React.createElement("div", { className: "colorplate" }, "Sky 3"),
        React.createElement(antd_2.Row, { gutter: [32, 32] },
            React.createElement(antd_2.Col, { span: 8 },
                React.createElement("p", null, "\u0417\u0434\u0435\u0441\u044C \u043F\u0440\u0438\u043C\u0435\u0440 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043A\u0438 \u0434\u043B\u0438\u043D\u043E\u0439 \u0432 60-70 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \u0432 \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0435, \u044D\u0442\u043E \u043A\u0440\u0430\u0439\u043D\u0435 \u0432\u0430\u0436\u043D\u043E \u0434\u043B\u044F \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u0447\u0438\u0442\u0430\u0435\u043C\u043E\u0441\u0442\u0438 \u043D\u0430 \u043F\u043E\u0440\u0442\u0430\u043B\u0435 \u0438 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u043C. \u041E\u0431\u0440\u0430\u0449\u0430\u0435\u043C \u043D\u0430 \u044D\u0442\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u0441\u0430\u043C\u043E\u0435 \u043F\u0440\u0438\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435")),
            React.createElement(antd_2.Col, { span: 12 },
                React.createElement(antd_1.Button, { shape: "round", size: "large", type: "primary" }, "Primary Button"),
                React.createElement(antd_1.Button, null, "Default Button"))),
        React.createElement(antd_2.Row, { gutter: [32, 32] },
            React.createElement(antd_2.Col, { span: 24 },
                React.createElement(antd_1.Button, { type: "dashed" }, "Dashed Button"),
                React.createElement(antd_1.Button, { type: "text" }, "Text Button"))),
        React.createElement(antd_1.Button, { type: "link" }, "Link Button")));
}
exports["default"] = App;
