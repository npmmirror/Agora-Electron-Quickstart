import React from 'react';
import { Input, Row, Card, Form, Button } from 'antd';
import config from '../agora.config';

console.log('config', config);

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const onFinish = (values: any) => {
  console.log('Success:', values);
  config.appID = values.appID;
  config.defaultChannelId = values.defaultChannelId;
  config.token = values.token;
  config.pluginPath = values.pluginPath;

  config.addonLogPath = values.addonLogPath;
  config.nativeSDKVideoSourceLogPath = values.nativeSDKVideoSourceLogPath;
  config.nativeSDKLogPath = values.nativeSDKLogPath;
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const AuthInfoScreen = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <Row justify="center" align="middle">
        <Card title="Auth Info" style={{ width: 800 }}>
          <Form
            {...layout}
            name="basic"
            initialValues={config}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="App ID"
              name="appID"
              rules={[
                {
                  required: true,
                  message: 'Please input your App ID!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Channel ID"
              name="defaultChannelId"
              rules={[
                {
                  required: true,
                  message: 'Please input your channel id!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Token (Optional)"
              name="token"
              rules={[
                {
                  required: false,
                  message: 'Please input your token!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Plugin Path"
              name="pluginPath"
              rules={[
                {
                  required: false,
                  message: 'Please input your plugin path!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Native SDK Log Path"
              name="nativeSDKLogPath"
              rules={[
                {
                  required: true,
                  message: 'Please input log path',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Addon Log Path"
              name="addonLogPath"
              rules={[
                {
                  required: true,
                  message: 'Please input log path',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Native SDK Video Source Log Path"
              name="nativeSDKVideoSourceLogPath"
              rules={[
                {
                  required: true,
                  message: 'Please input log path',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Row>
    </div>
  );
};
export default AuthInfoScreen;
