import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Card, Button, Popconfirm } from 'antd';

class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            queryData: {}
        }
    }
    UNSAFE_componentWillMount() {
        this.props.dispatch({
            type: 'user/getUserList',
            payload: {},
            offset: 0
        })
    }
    UNSAFE_componentWillReceiveProps() {

    }



    renderTable() {
        const columns = [
            {
                title: '编号',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '手机号',
                dataIndex: 'mobile',
                key: 'mobile',
            },
            {
                title: '邮箱',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                width: 300,
                render: (text, record) => (
                    <span>
                        <Button type="primary" size="default" >
                            编辑
              </Button>
                        <Popconfirm  >
                            <Button type="primary" size="default" style={{ marginLeft: 40 }}>删除</Button>
                        </Popconfirm>

                    </span>
                ),
            },
        ];
        return (
            <Table
                columns={columns}
                dataSource={this.props.list}
                loading={this.props.loading}
                rowKey={record => record.locaId}
                pagination={false}
                bordered
            />
        )
    }

    render() {

        return (
            <div className="normal">
                <div>
                    <br />
                    <Card title="用户管理">
                        {this.renderTable()}
                    </Card>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { list } = state.user;
    console.log(list)
    return {
        list
    };
}

export default connect(mapStateToProps)(UserList);