template<typename T>

class BinaryTree
{
    public:
        """DATA"""

    private:
        class TreeNode 
        {
            public:
                t & data;
                TreeNode *left, *right;
                TreeNode(T & data) : data(data), left(nullptr), right(nullptr) { }
        }

        TreeNode *root_
};