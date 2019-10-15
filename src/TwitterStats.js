import React from 'react';
import styled from 'styled-components';

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

    renderTable(key){
        const data = this.state[key];
        if(data && data.length > 0) {
            return (
                <table>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Count</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((row, idx) => {console.log(row);
                            return (
                                <tr key={idx}>
                                    <td>{row.timestamp}</td>
                                    <td>{row[key].toLocaleString()}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            );
        }

    }

    render() {
        console.log(this.state);

        return (
            <Container>
                <Header>
                    <Title>Twitter Stats</Title>
                </Header>
                <Main>
                    <Panel>
                        <h2>Title</h2>
                        <div className="graph">Graph here</div>
                        <div className="table">{this.renderTable('twitterTweetCount')}</div>
                    </Panel>
                    <Panel>
                        <h2>Title</h2>
                        <div className="graph">Graph here</div>
                        <div className="table">{this.renderTable('twitterFollowerCount')}</div>
                    </Panel>
                    <Panel>
                        <h2>Title</h2>
                        <div className="graph">Graph here</div>
                        <div className="table">{this.renderTable('twitterFollowingCount')}</div>
                    </Panel>
                    <Panel>
                        <h2>Title</h2>
                        <div className="graph">Graph here</div>
                        <div className="table">{this.renderTable('twitterLikeCount')}</div>
                    </Panel>
                </Main>
                <Footer>
                    <p>Made with <span role='img' aria-label='love'>❤️</span> by @clint_milner</p>
                </Footer>
            </Container>
        );
    }
}
