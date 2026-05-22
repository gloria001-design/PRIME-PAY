import "./css/Dashboard.css";
// import { Statistic, Table, Tag, Card, Layout, Row, Col } from "antd";
import React from "react";
import {
  Layout,
  Row,
  Col,
  Card,
  Statistic,
  Table,
  Tag,
  Button,
  Typography,
  Space,
  Avatar,
  Grid,
} from "antd";
import {
  DashboardOutlined,
  InboxOutlined,
  DropboxOutlined,
  CarOutlined,
  CheckCircleOutlined,
  EyeOutlined,
  RiseOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

// Order data
const orders = [
  {
    key: "1",
    orderId: "ORD-0811",
    customer: "Sarah Jenkins",
    address: "122 Oakwood Dr, Springfield",
    date: "Mar 24, 2025",
    status: "New Request",
  },
  {
    key: "2",
    orderId: "ORD-0818",
    customer: "Michael Reis",
    address: "45 Maple Ave, Higgins",
    date: "Mar 23, 2025",
    status: "Awaiting",
  },
  {
    key: "3",
    orderId: "ORD-0815",
    customer: "Emily Chen",
    address: "882 Broadway, Suite 4",
    date: "Mar 22, 2024",
    status: "Ready",
  },
  {
    key: "4",
    orderId: "ORD-0812",
    customer: "Robert Miller",
    address: "13-15 Industrial Park",
    date: "Mar 22, 2024",
    status: "Picked Up",
  },
  {
    key: "5",
    orderId: "ORD-0806",
    customer: "Jessica Taylor",
    address: "712 Pine Street, Apt 12",
    date: "Mar 21, 2024",
    status: "Awaiting",
  },
];

// Status configuration for tags
const getStatusConfig = (status) => {
  switch (status) {
    case "New Request":
      return { color: "blue" };
    case "Awaiting":
      return { color: "orange" };
    case "Ready":
      return { color: "green" };
    case "Picked Up":
      return { color: "default" };
    default:
      return { color: "default" };
  }
};

const DashboardTable = () => {
  const screens = useBreakpoint();

  // Table columns definition
  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Pickup Address",
      dataIndex: "address",
      key: "address",
      render: (text) => (
        <Space size="small" className="address-cell">
          <EnvironmentOutlined />
          <Text>{text}</Text>
        </Space>
      ),
      responsive: ["md"],
    },
    {
      title: "Pickup Date",
      dataIndex: "date",
      key: "date",
      render: (text) => (
        <Space size="small" className="date-cell">
          <CalendarOutlined />
          <Text>{text}</Text>
        </Space>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const config = getStatusConfig(status);
        return <Tag color={config.color}>{status}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Button
          type="link"
          size="small"
          icon={<EyeOutlined />}
          className="view-order-btn"
        >
          View Order
        </Button>
      ),
    },
  ];

  return (
    <Layout className="dashboard-layout">
      {/* Header */}
      <Header className="dashboard-header">
        <div className="header-container">
          <Space size="middle" align="center">
            <Avatar icon={<DashboardOutlined />} className="logo-avatar" />
            <div className="logo-text">
              <Title level={4}>PrimePress Laundry Admin</Title>
              <Text type="secondary">Dashboard Overview</Text>
            </div>
          </Space>
          <div className="welcome-text">
            <Text type="secondary">Welcome back,</Text>
            <div>
              <strong>Admin</strong>
            </div>
          </div>
        </div>
      </Header>

      {/* Content */}
      <Content className="dashboard-content">
        {/* Welcome Text */}
        <Paragraph className="welcome-paragraph">
          Here is what's happening with your laundry facility today.
        </Paragraph>

        {/* Statistics Cards */}
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} lg={6}>
            <Card bordered={false} className="stat-card">
              <Statistic
                title="New Requests"
                value={12}
                prefix={<InboxOutlined />}
                className="statistic-blue"
              />
              <div className="stat-change">
                <Text type="success">
                  <RiseOutlined /> +45 from last week
                </Text>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card bordered={false} className="stat-card">
              <Statistic
                title="Washing in Progress"
                value={24}
                prefix={<DropboxOutlined />}
                className="statistic-blue"
              />
              <div className="stat-change">
                <Text type="success">
                  <RiseOutlined /> +45 from last week
                </Text>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card bordered={false} className="stat-card">
              <Statistic
                title="Ready for Delivery"
                value={8}
                prefix={<CarOutlined />}
                className="statistic-blue"
              />
              <div className="stat-change">
                <Text type="success">
                  <RiseOutlined /> +45 from last week
                </Text>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card bordered={false} className="stat-card">
              <Statistic
                title="Completed Today"
                value={156}
                prefix={<CheckCircleOutlined />}
                className="statistic-blue"
              />
              <div className="stat-change">
                <Text type="success">
                  <RiseOutlined /> +45 from last week
                </Text>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Recent Orders Table */}
        <Card
          title="Recent Orders"
          extra={
            <Text type="secondary">
              Latest transactions processed in the last 24 hours.
            </Text>
          }
          className="orders-card"
          bordered={false}
        >
          <Table
            columns={columns}
            dataSource={orders}
            pagination={false}
            scroll={{ x: screens.xs ? 600 : undefined }}
          />
        </Card>

        {/* Analytics Insight Card */}
        <Card className="analytics-card" bordered={false}>
          <Row justify="space-between" align="middle" gutter={[16, 16]}>
            <Col xs={24} sm={18}>
              <Space size="small" align="center">
                <Avatar icon={<RiseOutlined />} className="analytics-avatar" />
                <Title level={5}>Weekly Productivity Insight</Title>
              </Space>
              <Paragraph className="analytics-text">
                Your average turnaround time for{" "}
                <Text strong>"Wash & Fold"</Text> is down by
                <Text strong className="highlight-green">
                  {" "}
                  10%{" "}
                </Text>{" "}
                this week. Great job keeping up with the volume!
              </Paragraph>
            </Col>
            <Col xs={24} sm={6}>
              <Button type="primary" ghost className="analytics-button" block>
                View Analytics →
              </Button>
            </Col>
          </Row>
        </Card>
      </Content>

      {/* Footer */}
      <Footer className="dashboard-footer">
        <Text type="secondary">
          © 2025 PrimePress Laundry Admin Dashboard - Quality Service Tracking
        </Text>
      </Footer>
    </Layout>
  );
};

export default DashboardTable;
