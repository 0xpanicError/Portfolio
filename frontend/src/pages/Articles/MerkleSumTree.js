import Article from "../../components/ArticlePage";

const MerkleSumTreeArticle = () => {
  return (
    <div>
      <Article
        name={"How Federated Learning can leverage Proof of Stake"}
        date={"2021-06-01"}
        description={`

Federated Learning was introduced by Google to train machine learning models on distributed datasets. Broadly all privacy-preserving decentralized machine learning schemes can be classified as federated learning. It works by having a network of nodes or clients each of which have a unique set of training data. 

A central server has a base model with base parameters which is given to each client. The clients train this model with their local data and only share the updated parameters. The central server then takes the federated average of these parameters to generate a new and updated base model which is then again trained upon by the local clients. This process is continuously iterated to improve the accuracy of the model.

The major concerns explored here are i) the identification of malicious clients in a federated learning network and ii) preserving the privacy of local parameters to limit leakage of private datasets. 

There are several methods to make a federated learning network Bryntazine proof including Multi-Krull and GeoMed. One particular scheme is Blockchain Based Grouped Federated Learning Scheme (BGFLS) which groups a set geographically and backtracks malicious clients using bloom filters. Identifying malicious parameters can enable us to slash them using Eigenlayer and establish crypto-economic security in the network.

In primitive FL schemes, local model parameters are shared by clients directly to the central server for aggregation. But several researchers point out that access and exchange of local parameters can lead to leaking of sensitive and private data. Hence making the model parameters encrypted is essential to make the scheme privacy-preserving. Blockchain Based Privacy-Preserving Federated Learning Scheme (BPFL) uses homomorphic encryption to ensure that local model parameters are private.

## How does BGFLS work?

BGFLS is an architecture that groups clients and establishes a Model Parameters Sharing (MPS) Chain in each group to identify and backtrack malicious clients. This is done as backtracking algorithms are complicated and time-consuming with a large network of clients.

### Architecture
First, we randomly select clients by location and form a group. A MPS Chain is built on top of each group using Hyperledger fabric. This is done because we need a special block structure for the MPS Chain. Each client in a group gets a base model at genesis and locally trains the model to generate a set of update parameters. A random client in the group (Ci) initiates a model sharing request. 

A client Cj shares the latest parameters with Ci which is recorded in the MPS Chain as a transaction. After all parameters are shared and consensus is reached within the group, a new block is minted with model parameters of all clients. Ci also aggregates the local parameters and shares a new base model in the same block which is then trained upon by the rest of the clients.

The block structure has several bloom filters added by Ci  to improve efficiency of backtracking malicious clients. A bloom filter is a probabilistic and efficient data structure to identify if an element is a part of a set. This part is used to identify the malicious parameters inside a group which we can verify and compare to find the malicious client.

A central server receives the aggregated parameters and checks similarity between different group parameters. If group A send parameters a = [a0, a1, a2, …] and group B send parameters b = [b0, b1, b2, …] then similarity is calculated by cosθ = a.b / |a||b|.

If similarity to a particular group is very low compared to other groups then it's classified as a malicious group. After identification, bloom filters can be used to check which parameters are malicious and verify to make sure which client is sending malicious parameters.`}
        image={
          "https://aptosfoundation.org/brandbook/logomark/PNG/Aptos_mark_WHT.png"
        }
      />
    </div>
  );
};

export default MerkleSumTreeArticle;
