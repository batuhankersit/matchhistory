import './App.less';
import { Button, Layout, Menu, Table, Space, Input } from 'antd';
const { Search } = Input;
const { Header, Content, Footer } = Layout;

const columns = [
  {
    title: 'GameType',
    dataIndex: 'gameType',
    key: 'gameType',
  },
  {
    title: 'Champion',
    dataIndex: 'champion',
    key: 'champion',
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
  },
  {
    title: 'Watch Game',
    key: '',
    render: (text, record) => (
      <Space size="middle">
        <Button type="primary">Watch Game</Button>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    gameType: 'Flex 5:5 Ranked',
    champion: "Amumu",
    score: '15/4/5',
  },
  {
    key: '2',
    gameType: 'Normal',
    champion: "Annie",
    score: '12/3/9',
  },
  {
    key: '3',
    gameType: 'Ranked',
    champion: "Rengar",
    score: '19/4/7',
  },
];

function App() {
  const onSearch = value => console.log(value);
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            Home
          </Menu.Item>
          <Menu.Item key="2">
            Match History
          </Menu.Item>
          <Menu.Item key="3">
            Statictics
          </Menu.Item>
          <Menu.Item key="4">
            Compare With Summoner
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className="site-layout-content">
          <Space style={{ marginBottom: 16 }}>
            <Search placeholder="Type Username" onSearch={onSearch} enterButton />
          </Space>
          <Table columns={columns} dataSource={data} /></div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Match History Project ©2021</Footer>
    </Layout>
  );
}

export default App;
