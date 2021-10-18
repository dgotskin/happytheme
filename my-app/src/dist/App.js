"use strict";
exports.__esModule = true;
require("./happytheme.less");
// App specific
require("./App.less");
//Components
var antd_1 = require("antd");
var Title = antd_1.Typography.Title, Text = antd_1.Typography.Text, Link = antd_1.Typography.Link;
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("div", { className: "boxcard-md" },
            React.createElement(Title, null, "Happy Theme for Design System"),
            React.createElement(Text, null, "Ant Design (default)"),
            React.createElement(Text, { type: "secondary" }, "Ant Design (secondary)")),
        React.createElement(antd_1.Row, { gutter: [32, 32] },
            React.createElement(antd_1.Col, { span: "6" },
                React.createElement("div", { className: "boxcard-lg filled" },
                    React.createElement(antd_1.Space, { direction: "vertical", size: "large" },
                        React.createElement(Title, { level: 2 }, "h2. Ant Design"),
                        React.createElement(Title, { level: 3 }, "h3. Ant Design"),
                        React.createElement(Title, { level: 4 }, "h4. Ant Design"),
                        React.createElement(Title, { level: 5 }, "h5. Ant Design"),
                        React.createElement(Text, null, "Ant Design (default)"),
                        React.createElement(Text, { type: "secondary" }, "Ant Design (secondary)"),
                        React.createElement(Text, { type: "success" }, "Ant Design (success)"),
                        React.createElement(Text, { type: "warning" }, "Ant Design (warning)"),
                        React.createElement(Text, { type: "danger" }, "Ant Design (danger)"),
                        React.createElement(Text, { disabled: true }, "Ant Design (disabled)"),
                        React.createElement(Text, { mark: true }, "Ant Design (mark)"),
                        React.createElement(Text, { code: true }, "Ant Design (code)"),
                        React.createElement(Text, { keyboard: true }, "Ant Design (keyboard)"),
                        React.createElement(Text, { underline: true }, "Ant Design (underline)"),
                        React.createElement(Text, { "delete": true }, "Ant Design (delete)"),
                        React.createElement(Text, { strong: true }, "Ant Design (strong)"),
                        React.createElement(Text, { italic: true }, "Ant Design (italic)"),
                        React.createElement(Link, { href: "https://ant.design", target: "_blank" }, "Ant Design (Link)")))),
            React.createElement(antd_1.Col, { span: "6" },
                React.createElement("div", { className: "boxcard-lg" },
                    React.createElement(antd_1.Space, { direction: "vertical", size: "large" },
                        React.createElement(Title, { level: 2 }, "h2. Ant Design"),
                        React.createElement(Title, { level: 3 }, "h3. Ant Design"),
                        React.createElement(Title, { level: 4 }, "h4. Ant Design"),
                        React.createElement(Title, { level: 5 }, "h5. Ant Design"),
                        React.createElement(Text, null, "Ant Design (default)"),
                        React.createElement(Text, { type: "secondary" }, "Ant Design (secondary)"),
                        React.createElement(Text, { type: "success" }, "Ant Design (success)"),
                        React.createElement(Text, { type: "warning" }, "Ant Design (warning)"),
                        React.createElement(Text, { type: "danger" }, "Ant Design (danger)"),
                        React.createElement(Text, { disabled: true }, "Ant Design (disabled)"),
                        React.createElement(Text, { mark: true }, "Ant Design (mark)"),
                        React.createElement(Text, { code: true }, "Ant Design (code)"),
                        React.createElement(Text, { keyboard: true }, "Ant Design (keyboard)"),
                        React.createElement(Text, { underline: true }, "Ant Design (underline)"),
                        React.createElement(Text, { "delete": true }, "Ant Design (delete)"),
                        React.createElement(Text, { strong: true }, "Ant Design (strong)"),
                        React.createElement(Text, { italic: true }, "Ant Design (italic)"),
                        React.createElement(Link, { href: "https://ant.design", target: "_blank" }, "Ant Design (Link)")))))));
}
exports["default"] = App;
