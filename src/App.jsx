import "./App.css";
import { Layout } from "antd";
import { WrapHeaders, WrapFooter } from "./components/index";
import { createStyles } from "antd-style";
import { Navigate, useRoutes } from "react-router-dom";
const { Header, Content } = Layout;
import { Send, Data } from "./pages/index";

const useStyles = createStyles({
  header: {
    backgroundImage: "linear-gradient( 0deg, rgb(41,80,181) 0%, rgb(89,172,255) 0%, rgb(45,148,252) 36%, rgb(0,124,249) 100%)",
    height: 83,
    lineHeight: "83px",
  },
  content: {
    background: "#f2f7fe",
    padding: 36,
  },
  footer: {
    background: "#f2f7fe",
    padding: 36,
  },
  white: {
    background: "#fff",
    padding: 48,
    // borderRadius: "8px",
  },
});

export default function App(props) {
  const { styles } = useStyles();
  return (
    <Layout>
      <Header className={styles.header}>
        <WrapHeaders></WrapHeaders>
      </Header>
      <Content className={styles.content}>
        <div className={styles.white}>
          <BaseRouter {...props} />
        </div>
      </Content>
      <div className={styles.footer}><WrapFooter ></WrapFooter></div>
    </Layout>
  );
}

function BaseRouter(props) {
  const element = useRoutes([
    {
      path: "/send",
      element: <Send {...props} />,
    },
    {
      path: "/data",
      element: <Data {...props} />,
    },
    {
      path: "*",
      element: <Navigate to="/send" />,
    },
  ]);
  return element;
}
