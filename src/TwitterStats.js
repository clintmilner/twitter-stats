import React from 'react';
import styled from 'styled-components';
import moment from "moment";
import HighchartsWrapper from "./components/HighchartsWrapper";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    height: 3em;
    margin-bottom: 30px;
    border-bottom: 1px solid #585858;
    padding: 0 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Title = styled.h1`
  font-size: 1.5em;
  margin: 0 auto;
`;
const Main = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;
const Panel = styled.div`
    border: 1px solid #2E3039;
    -webkit-border-radius: 4px; -moz-border-radius: 4px;border-radius: 4px;
    height: auto;
    width: calc(50% - 20px);
    padding: 10px;
    margin: 10px;
    box-sizing: border-box;
    @media (max-width: 768px) {
        //flex-direction: column;
        width: calc(100% - 20px);
  }
`;
const Table = styled.table`
    width: 100%;
    font-size: smaller;
    border: 1px solid #2e3039;
    th, td {
        border: 1px solid #2e3039;
    }
    td:last-child {
        text-align: center;
    }
`;
const Footer = styled.footer`
    background: #282c34;
    border-top: 1px solid #585858;
    margin-top: 30px;
    height: 50px;
    display: flex;
    flex-direction: column;
    p {
        text-align: center;
        margin: auto;
    }
`;

export default class TwitterStats extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            twitterTweetCount: [],
            twitterLikeCount: [],
            twitterFollowerCount: [],
            twitterFollowingCount: []
        };
    }

    componentDidMount() {
        fetch('//scraper.clintmilner.com:9999/data')
            .then((data) => (data.json()))
            .then((json) => {
                this.setState(() => ({...json}));
            }).catch((e) => console.error('ERROR: ', e));
    }

    renderTable(key) {
        const data = this.state[key];
        if (data && data.length > 0) {
            return (
                <Table>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Count</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.filter((row, idx) => (data.length <=5 || data.length - idx <= 5))
                            .map((row, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{moment(row.timestamp).format('MMM Do YYYY, h:mm:ss a')}</td>
                                    <td>{row[key].toLocaleString()}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </Table>
            );
        }

    }

    render() {
        const {twitterTweetCount, twitterFollowerCount, twitterFollowingCount, twitterLikeCount} = this.state;
        return (
            <Container>
                <Header>
                    <Title>Twitter Stats</Title>
                </Header>
                <Main>
                    {
                        (twitterTweetCount && twitterTweetCount.length > 0)
                            ? <Panel>
                                <h2>Tweet Count</h2>
                                <div className="graph"><HighchartsWrapper data={twitterTweetCount} /></div>
                                <div className="table">{this.renderTable('twitterTweetCount')}</div>
                            </Panel>
                            : null
                    }
                    {
                        (twitterFollowerCount && twitterFollowerCount.length > 0)
                            ? <Panel>
                                <h2>Follower Count</h2>
                                <div className="graph"><HighchartsWrapper data={twitterFollowerCount} /></div>
                                <div className="table">{this.renderTable('twitterFollowerCount')}</div>
                            </Panel>
                            : null
                    }
                    {
                        (twitterFollowingCount && twitterFollowingCount.length > 0)
                            ? <Panel>
                                <h2>Following Count</h2>
                                <div className="graph"><HighchartsWrapper data={twitterFollowingCount} /></div>
                                <div className="table">{this.renderTable('twitterFollowingCount')}</div>
                            </Panel>
                            : null
                    }
                    {
                        (twitterLikeCount && twitterLikeCount.length > 0)
                            ? <Panel>
                                <h2>Like Count</h2>
                                <div className="graph"><HighchartsWrapper data={twitterLikeCount} /></div>
                                <div className="table">{this.renderTable('twitterLikeCount')}</div>
                            </Panel>
                            : null
                    }

                </Main>
                <Footer>
                    <p>Made with <span role='img' aria-label='love'>❤️</span> by @clint_milner</p>
                </Footer>
            </Container>
        );
    }
}
