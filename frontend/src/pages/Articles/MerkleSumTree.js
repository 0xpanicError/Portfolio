import Navbar from "../../components/Navbar";
import styles from "../../styles/Page.module.css";
import { Helmet } from "react-helmet";
import ArticleCover from "../../assets/merklesumtree/MST_cover.png";
import Img1 from "../../assets/merklesumtree/MST_1.png";
import Img2 from "../../assets/merklesumtree/MST_2.png";
import Img3 from "../../assets/merklesumtree/MST_3.png";

const MerkleSumTreeArticle = () => {
  return (
    <div>
      <Helmet>
        <title>
          Merkle Sum Tree: A Vulnerability Analysis and Mitigation Strategies
        </title>
        <meta
          name="description"
          content="What is a Merkle Sum Tree and how is it used in Proof of Solvency protocols?"
        />
        <meta
          property="og:title"
          content="Merkle Sum Tree: A Vulnerability Analysis and Mitigation Strategies"
        />
        <meta
          property="og:description"
          content="What is a Merkle Sum Tree and how is it used in Proof of Solvency protocols?"
        />
        <meta property="og:image" content={ArticleCover} />
        <meta
          property="og:url"
          content="https://panic.wtf/articles/merklesumtree"
        />
      </Helmet>
      <div className={styles.container}>
        <div className={styles.nav}>
          <Navbar />
        </div>
        <div className={styles.articleTitle}>
          <h1>
            Merkle Sum Tree: A Vulnerability Analysis and Mitigation Strategies
          </h1>
          9th March 2024
        </div>
        <div className={styles.articleBody}>
          <div className={styles.articleBodyLeft}>
            <br />
            <img
              src={ArticleCover}
              alt="Merkle Sum Tree"
              className={styles.articleImage}
            />
            <br />
            <h3>Introduction</h3>
            Since the introduction of Bitcoin, people have been interested in
            investing and trading in cryptocurrencies. As a result of that,
            countless exchanges arose in the 2010s that can facilitate this
            transaction. But unlike stock exchanges, there were no regulatory
            bodies like SEC, SEBI or ESMA. Hence the only option you have in
            obtaining cryptocurrencies is to trust the exchange and hope they
            have your reserves.
            <br />
            <br />
            This was quite obviously the opposite dynamic of what Bitcoin
            promotes, which was a trustless world where code is law and
            everything is mathematically guaranteed. This led to the creation of
            Proof of Solvency solutions, a cryptographic way to prove that an
            exchange holds more assets than the liabilities due to its users.
            This would ensure that in case of a bank run, the exchange would be
            successful in satisfying the withdrawals of each and every user.
            <br />
            <h3>Proof of Solvency</h3>
            Proof of Solvency can be achieved by having a commitment of assets
            and liabilities on chain. Proving that the exchange holds some
            assets is quite easy, you just need a signature to prove that an
            exchange does indeed own a bunch of accounts who’s balance can
            easily be verified on the blockchain. But proving how much liability
            the exchange has is a bit tricky. This is because the exchange
            receives real world assets from the user and holds their
            cryptocurrency on their behalf. This is why these exchanges are also
            called custodians. Decentralized exchanges like Uniswap don’t face
            this problem as the users have control over their assets and the
            exchange happens through smart contracts on chain.
            <br />
            <br />
            For example, Summa is a zero knowledge proof of solvency protocol
            developed by Privacy and Scaling Ethereum. They let custodians
            generate proof of solvency while keeping their sensitive data
            private. According to Summa's requirements, the equation must be
            satisfied between assets and liabilities for each cryptocurrency to
            generate a valid Proof of Solvency.
            <br />
            <h3>Merkle Sum Tree</h3>
            <img
              src={Img1}
              alt="Merkle Sum Tree"
              className={styles.articleImage}
            />
            <br />
            <br />
            To prove a commitment of liabilities, the Merkle Sum Tree (also
            called a Maxwell Tree) was introduced. A Merkle Sum Tree is similar
            to a Merkle Tree but in addition to the hash of the contents, it
            also has a balance value for each leaf node. Each leaf node contains
            the hash of a username and a balance of that user. The balance of
            each middle node is the sum of the balances of its child nodes and
            hence the root of this Merkle Sum Tree has the cumulative balance of
            all its leaf nodes.
            <br />
            <br />
            The leaf node includes information like the balance, username or Id
            and a nonce.
            <br />
            <br />
            The hash of a leaf node is hence:
            <b> h = H(v || id || nonce)</b> and the hash of a middle node upto
            the root is:
            <br />
            <b>h = (vr + vl || hr || hl)</b>
            <br /> *where v represents the balance
            <br /> r suffix represents the right child
            <br /> l suffix represents the left child
            <h3>Vulnerebility Analysis</h3>
            This original form of Merkle Sum Tree is prone to an attack where
            the custodian can lie and report less liabilities than they actually
            hold. The lowest bound of this attack is where the custodian shows
            their total liabilities is equal to the maximum of all the
            liabilities of the users.
            <br />
            <br />
            <img
              src={Img2}
              alt="Merkle Sum Tree"
              className={styles.articleImage}
            />
            <br />
            <br />
            The attack can take place when the custodian builds a Merkle Tree
            where Balance of a middle node is v where:
            <br />
            <b> {"max(vr, vl) <= v <= vr + vl"}</b>
            <br />
            <br />
            This attack works under the assumption that the user information is
            private to each user and only the custodian has information about
            all the users.
            <br />
            <br />
            Suppose MST was constructed with Middle node having a balance =
            Max(vr, vl) In this scenario when I request a Merkle proof from the
            custodian, I receive the balance and Hash of my immediate leaf node
            along with balances and hashes of sibling middle nodes required to
            construct the tree.
            <br />
            <br />
            At each step, instead of providing me the actual balance in the
            node, the custodian just provide me the value:
            <br /> <b>v = max(vr, vl) - v’</b>
            <br />
            *where v’ is the balance of my node
            <br />
            <br />
            This way at each step the total balance will sum up to max(vr, vl)
            and the root I obtain will be equal to the root committed by the
            custodian. This would leave me to believe that I have successfully
            verified my proof of inclusion without realizing that I did NOT
            construct a Merkle Sum Tree but just picked out the max balance of
            all leaf nodes.
            <br />
            <br />
            We are under the assumption that the balance information of a leaf
            node is private to each user and the custodian has all information
            about the tree.
            <br />
            <br />
            <img
              src={Img3}
              alt="Merkle Sum Tree"
              className={styles.articleImage}
            />
            <br />
            <br />
            In practice the custodian can put any value v:
            <br />
            <b>{"max(vr, vl) <= v <= vr +vl"}</b>
            <br />
            *Assumption: the custodian has no intention to overstate its
            liabilities
            <br />
            <br />
            If a user has multiple addresses, then they can construct multiple
            trees and realize discrepancies wherever their nodes intersect. Also
            if a user with the maximum balance of all users verifies their proof
            of inclusion, they’ll realize that their liability is equal to the
            total liabilities committed.
            <br />
            <br />A custodian has access to all their user data, both in the
            Merkle Tree and Auxiliary data they can collect from cookies. They
            can use this information to pinpoint exactly which addresses a user
            holds and construct a tree with values to minimize the chance of
            realizing an attack.
            <h3>Mitigation</h3>
            This vulnerability was originally discovered in{" "}
            <a href="https://eprint.iacr.org/2022/043.pdf" target="_blank">
              this
            </a>{" "}
            paper which also provided mitigation solution. Include balances of
            both child nodes in the hash of middle node Provide zk proof of
            hashing along with merkle proof
            <br />
            <br />
            Instead of hashing the sum of balances of child nodes, a middle node
            can instead use the hash: <b>h = H(vr || vl || hr || hl)</b>
            <br />
            This way the custodian cannot lie about the balances of other nodes
            not visible to the user as any attempt at tampering the merkle tree
            will change the hash and not allow the users to verify proof of
            inclusion.
            <br />
            <br />
            <a href="https://eprint.iacr.org/2018/1139.pdf" target="_blank">
              This
            </a>{" "}
            paper talks about another approach (taken by summa) in section 3.2
            which is to provide along with the Merkle proof, a ZK proof:{" "}
            <b>{"π = ZK.Prove{(x) : h = H(v||x)}"}</b>
            <br />
            <br />A user after verifying this zk proof will be convinced that
            the balance of each leaf node is aggregated correctly. This is
            beacuse if the custodian tries lie about the liabilities commitment,
            they also would require to submit a zk proof for constructing the
            tree which wouldn't be possible.
            <br />
            <br />
            Proof of Concept for this attack shows that even if you modify the
            Merkle Sum Tree construction, the circuits that include a sum
            constraint would not compile and generate a false proof.
            <br />
            <a
              href="https://www.piapark.me/blog/merkle-sum-tree-attack.html"
              target="_blank"
            >
              Link to POC
            </a>
            <br />
            <br />
            Special thanks to{" "}
            <a href="https://twitter.com/piapark_eth" target="_blank">
              Pia Park
            </a>{" "}
            for contributing in this research and building the POC for this
            atatck.
            <h3>Conclusion</h3>
            The Merkle Sum Tree is a unique way to include a commitment of
            liabilities in a Proof of Solvency protocol. But with any new data
            structure and/or cryptographic protocol, it is important to
            understand the vulnerabilities and how to mitigate them.
            <br />
            <br />A thourough security analysis of any protocol, essentially in
            the field of blockchain should be the top protity of any developer.
            That's why is always a good idea to have a reputable third party
            audit your code before deploying it to the mainnet. This is also a
            reason why building in public is a good idea as it not only promotes
            the idea of open source and transparent software but also allows the
            community to review your code and provide feedback.
            <h3>References</h3>
            <ul>
              <li>
                <a href="https://eprint.iacr.org/2022/043.pdf" target="_blank">
                  Broken Proofs of Solvency in Blockchain Custodial Wallets and
                  Exchanges
                </a>
              </li>
              <li>
                <a href="https://eprint.iacr.org/2018/1139.pdf" target="_blank">
                  Breaking the Binding: Attacks on the Merkle Approach to Prove
                  Liabilities and its Applications
                </a>
              </li>
              <li>
                <a
                  href="https://eprint.iacr.org/2015/1008.pdf/"
                  target="_blank"
                >
                  Provisions: Privacy-preserving proofs of solvency for Bitcoin
                  exchanges
                </a>
              </li>
              <li>
                <a href="https://summa.gitbook.io/summa-book" target="_blank">
                  Summa: A Zero-Knowledge Proof of Reserves tool designed for
                  custodial services
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/summa-dev/summa-solvency/issues/166"
                  target="_blank"
                >
                  Effiency Improvemnet in Summa's implementation of Broken
                  Merkle Sum Tree
                </a>
              </li>
              <li>
                <a
                  href="https://www.piapark.me/blog/merkle-sum-tree-attack.html"
                  target="_blank"
                >
                  Proof of Concept for Merkle Sum Tree Attack
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.tableContent}>
            <h4>Table of Contents</h4>
            <ul>
              <li>Introduction</li>
              <br />
              <li>Proof of Solvency</li>
              - How does it work?
              <br /> - Case Study: Summa
              <br />
              <br />
              <li>Merkle Sum Tree</li>
              <br />
              <li>Vulnerebility Analysis</li>
              - MST is broken
              <br />- How custodians can lie
              <br />
              <br />
              <li>Mitigation</li>- Solution to the broken
              <br />
              Merkle Sum Tree
              <br />- Summa's approach
              <br />
              <br />
              <li>Conclusion</li>
              <br />
              <li>References</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerkleSumTreeArticle;
