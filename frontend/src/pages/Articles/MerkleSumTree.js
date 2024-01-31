import Navbar from "../../components/Navbar";
import styles from "../../styles/Page.module.css";

const MerkleSumTreeArticle = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div>
        <h1>Merkle Sum Tree</h1>
        21st July 2021
      </div>
      <div className={styles.articleBody}>
        {" "}
        A Merkle Sum Tree is similar to a Merkle Tree but in addition also has a
        balance value for each leaf node. The balance of each middle node is the
        sum of the balances of its child nodes and hence the root of this Merkle
        Sum Tree has the cumulative balance of all its leaf nodes. This scheme
        was introduced for custodians to commit proof of liabilities so that
        there is cryptographic evidence of solvency. Custodians are supposed to
        include balances of each user in the leaf nodes and build a tree to
        report their total liabilities.
        <br />
        <br />
        The leaf node includes information like the balance, username or Id and
        a nonce. The hash of a leaf node is hence:
        <b>h = H(v || id || nonce)</b> The hash of a middle node upto the root
        is:
        <br />
        <b>h = (vr + vl || hr || hl)</b>
        <br /> *where v represents the balance
        <br /> r suffix represents right child and l suffix represents the left
        child
        <h3>Vulnerebility Analysis</h3>
        This original form of Merkle Sum Tree is prone to an attack where the
        custodian can lie and report less liabilities than they actually hold.
        The lowest bound of this attack is where the custodian shows their total
        liabilities is equal to the maximum of all the liabilities of the users.
        <br />
        <br />
        The attack can take place when the custodian builds a Merkle Tree where
        Balance of a middle node is v where:
        <b> {"max(vr, vl) <= v <= vr + vl"}</b>
        <br />
        <br />
        This attack works under the assumption that the user information is
        private to each user and only the custodian has information about all
        the users.
        <br />
        <br />
        Suppose MST was constructed with Middle node having a balance = Max(vr,
        vl) In this scenario when I request a Merkle proof from the custodian, I
        receive the balance and Hash of my immediate leaf node along with
        balances and hashes of sibling middle nodes required to construct the
        tree.
        <br />
        <br />
        At each step, instead of providing me the actual balance in the node,
        the custodian just provide me the value v = max(vr, vl) - v’ *where v’
        is the balance of my node
        <br />
        <br />
        This way at each step the total balance will sum up to max(vr, vl) and
        the root I obtain will be equal to the root committed by the custodian.
        This would leave me to believe that I have successfully verified my
        proof of inclusion without realizing that I did NOT construct a Merkle
        Sum Tree but just picked out the max balance of all leaf nodes.
        <br />
        <br />
        We are under the assumption that the balance information of a leaf node
        is private to each user and the custodian has all information about the
        tree.
        <br />
        <br />
        In practice the custodian can put any value v:
        <b>{"max(vr, vl) <= v <= vr +vl"}</b>
        <br />
        *Assumption: the custodian has no intention to overstate its liabilities
        <br />
        <br />
        If a user has multiple addresses, then they can construct multiple trees
        and realize discrepancies wherever their nodes intersect. Also if a user
        with the maximum balance of all users verifies their proof of inclusion,
        they’ll realize that their liability is equal to the total liabilities
        committed.
        <br />
        <br />A custodian has access to all their user data, both in the Merkle
        Tree and Auxiliary data they can collect from cookies. They can use this
        information to pinpoint exactly which addresses a user holds and
        construct a tree with values to minimize the chance of realizing an
        attack.
        <h3>Mitigation</h3>
        This vulnerability was originally discovered in this paper which also
        provided two mitigation solutions in section 3.2 Include balances of
        both child nodes in the hash of middle node Provide zk proof of hashing
        along with merkle proof
        <br />
        <br />
        Instead of hashing the sum of balances of child nodes, a middle node can
        instead use the hash: <b>h = H(vr || vl || hr || hl)</b> This way the
        custodian cannot lie about the balances of other nodes not visible to
        the user as any attempt at tampering the merkle tree will change the
        hash and not allow the users to verify proof of inclusion.
        <br />
        <br />
        Another approach (taken by summa) is to provide along with the Merkle
        proof, a ZK proof: <b>{"π = ZK.Prove{(x) : h = H(v||x)}"}</b> A user
        after verifying this zk proof will be convinced that the balance of each
        leaf node is aggregated correctly.
      </div>
      <div className={styles.tableContent}>
        <h4>Table of Contents</h4>
        <ul>
          <li>Vulnerebility Analysis</li>
          <li>Mitigation</li>
        </ul>
      </div>
    </div>
  );
};

export default MerkleSumTreeArticle;
