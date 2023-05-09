import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { createStyles } from "antd-style";
import { TagContent } from "../../components/index";
import { Title, Card } from "../../components";
import heightImg from "../../assets/height.png";
import explorerImg from "../../assets/explorer.png";
import gasUsedImg from "../../assets/gas-used.png";
import gasWantedImg from "../../assets/gas-wanted.png";
import namespaceImg from "../../assets/namespace.png";
import namespaceBgImg from "../../assets/namespace-bg.png";
import heightBgImg from "../../assets/height-bg.png";
import explorerBgImg from "../../assets/explorer-bg.png";
import gasUsedBgImg from "../../assets/gas-used-bg.png";
import gasWantedBgImg from "../../assets/gas-wanted-bg.png";

const useStyles = createStyles({
  title: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "1",
  },
  link: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "1",
    fontFamily: "DINAlternate",
    overflowWrap: "anywhere"
  },
  button: {
    borderRadius: "18px",
  },
});

const gridStyle = {
  width: "50%",
  textAlign: "left",
  boxShadow: "none",
  lineHeight: "1",
};
const DateStyle = {
  width: "100%",
  textAlign: "left",
  boxShadow: "none",
  lineHeight: "1",
};

export default function Data(props) {
  const { styles } = useStyles();
  const [search, setSearch] = useSearchParams();
  const namespace_id = search.get("namespace_id");
  const height = search.get("height");
  const gas_used = search.get("gas_used");
  const gas_wanted = search.get("gas_wanted");
  const data = search.get("data");
  const txhash = search.get("txhash");
  // const match = useMatch();
  // console.log(match);
  return (
    <Row gutter={[56, 24]}>
      <Col span={16}>
        <Row gutter={[0, 60]}>
          <Col span={24}>
            <Title>Transaction info</Title>
          </Col>
          <Col span={24}>
            <Row gutter={[36, 36]}>
              <Col span={24}>
                <Card
                  img={namespaceImg}
                  label="Namespace ID:"
                  content={namespace_id}
                  bg={namespaceBgImg}
                />
              </Col>
              <Col span={12}>
                <Card
                  img={gasWantedImg}
                  label="Gas wanted:"
                  content={gas_wanted}
                  bg={gasWantedBgImg}
                />
              </Col>
              <Col span={12}>
                <Card
                  img={heightImg}
                  label="Height:"
                  content={height}
                  bg={heightBgImg}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={8}>
        <Row gutter={[0, 54]}>
          <Col span={24}>
            <Title>Data</Title>
          </Col>
          <Col span={24}>
            <TagContent tag="hex" status="warning">{data}</TagContent>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row gutter={24}>
          <Col span={8}>
            <Card
              img={gasUsedImg}
              label="Gas used:"
              content={gas_used}
              bg={gasUsedBgImg}
            />
          </Col>
          <Col span={12}>
            <Card
              img={explorerImg}
              label="Explorer:"
              content={<Link to={`https://testnet.mintscan.io/celestia-incentivized-testnet/txs/${txhash}`} className={styles.link}>{txhash}</Link>}
              bg={explorerBgImg}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
