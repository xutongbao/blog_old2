# antd Form.Item label 添加解释信息

![](https://img-blog.csdnimg.cn/20210910102855685.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5b6Q5ZCM5L-d,size_17,color_FFFFFF,t_70,g_se,x_16)![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== '点击并拖拽以移动')​

```html
          <Col span={span} className={expandClassname}>
            <Form.Item
              label={
                <span>
                  <span>是否添加</span>
                  <Tooltip
                    title='添加'
                    overlayClassName="m-tooltip"
                  >
                    <span className="m-help-wrap">
                      <Icon name="help"></Icon>
                    </span>
                  </Tooltip>
                </span>
              }
            >
              <Form.Item name="isAdd" noStyle>
                <Select
                  placeholder="请选择"
                  allowClear
                  getPopupContainer={() =>
                    document.getElementById('m-content-wrap')
                  }
                >
                  <Option value={1}>是</Option>
                  <Option value={0}>否</Option>
                </Select>
              </Form.Item>
            </Form.Item>
          </Col>
```

![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== '点击并拖拽以移动')
