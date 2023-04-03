Search.setIndex({"docnames": ["Introduction", "dist_model_parallel", "embedding", "index", "userguide"], "filenames": ["Introduction.md", "dist_model_parallel.rst", "embedding.rst", "index.rst", "userguide.rst"], "titles": ["Distributed Embeddings", "dist_model_parallel", "embedding", "Welcome to distributed-embeddings\u2019s documentation!", "Distributed Model Parallel"], "terms": {"i": [0, 1, 2, 4], "librari": 0, "larg": [0, 4], "base": [0, 1], "e": [0, 1, 2, 4], "g": 0, "recommend": 0, "tensorflow": [0, 4], "2": [0, 1, 2, 4], "It": [0, 1, 2, 4], "provid": [0, 2], "scalabl": 0, "automat": [0, 1, 2], "tabl": [0, 1], "multipl": [0, 4], "gpu": [0, 1, 3], "well": 0, "effici": [0, 4], "oper": 0, "cover": 0, "extend": 0, "": [0, 1, 2, 4], "function": [0, 2, 4], "refer": 0, "nvidia": 0, "develop": 0, "blog": 0, "about": 0, "terabyt": 0, "scale": [0, 4], "train": [0, 2, 4], "more": [0, 1], "detail": [0, 1], "distributed_embed": [0, 1, 2, 4], "dist_model_parallel": [0, 3, 4], "tool": [0, 4], "enabl": [0, 2, 4], "chang": [0, 4], "onli": [0, 1, 4], "three": [0, 4], "line": [0, 4], "your": [0, 4], "script": [0, 4], "can": [0, 1, 2, 4], "also": [0, 2, 4], "us": [0, 2, 4], "alongsid": [0, 4], "data": [0, 1, 4], "form": [0, 4], "hybrid": [0, 1, 4], "user": [0, 4], "easili": [0, 4], "experi": [0, 4], "beyond": [0, 4], "singl": [0, 2, 4], "memori": [0, 3], "capac": [0, 4], "without": [0, 2, 4], "complex": [0, 4], "code": [0, 4], "handl": [0, 1, 2, 4], "cross": [0, 4], "worker": [0, 1, 4], "commun": [0, 1, 4], "combin": [0, 2, 4], "tf": [0, 2, 4], "kera": [0, 1, 2, 4], "nn": [0, 4], "embedding_lookup_spars": [0, 4], "under": [0, 4], "unifi": [0, 4], "api": [0, 1, 4], "The": [0, 2, 4], "backend": [0, 4], "design": [0, 4], "achiev": [0, 4], "high": [0, 4], "see": [0, 1, 2], "guid": 0, "python": [0, 1, 2], "3": [0, 4], "cuda": 0, "11": 0, "newer": 0, "you": 0, "insid": 0, "22": 0, "03": 0, "later": [0, 2], "ngc": 0, "tf2": 0, "imag": 0, "note": [0, 2], "horovod": [0, 1, 4], "v0": 0, "27": 0, "10": 0, "altern": 0, "23": 0, "docker": 0, "pull": 0, "nvcr": 0, "io": [0, 1], "py3": 0, "after": 0, "clone": 0, "thi": [0, 1, 2, 4], "repositori": 0, "run": [0, 1], "git": 0, "submodul": 0, "updat": 0, "init": 0, "recurs": 0, "make": [0, 1, 2], "pip_pkg": 0, "pip": 0, "artifact": 0, "whl": 0, "test": 0, "c": 0, "import": [0, 4], "synthet": 0, "dlrm": 0, "exampl": 0, "If": [0, 1, 2, 4], "d": [0, 2], "like": 0, "contribut": 0, "directli": [0, 2, 4], "md": 0, "we": [0, 4], "re": 0, "particularli": 0, "interest": 0, "request": 0, "our": 0, "engin": 0, "preprocess": 0, "To": [0, 4], "further": 0, "advanc": 0, "merlin": 0, "roadmap": 0, "encourag": 0, "share": [0, 3], "all": [0, 1, 4], "regard": 0, "system": 0, "pipelin": 0, "survei": 0, "learn": 0, "how": [0, 1], "work": [0, 4], "document": [0, 4], "class": [1, 2, 4], "layer": [1, 3], "arg": [1, 2], "kwarg": [1, 2], "sourc": [1, 2], "distribut": 1, "embed": 1, "wrapper": 1, "parallel": [1, 3], "around": 1, "forward": 1, "backward": 1, "paramet": [1, 2], "list": [1, 2, 4], "strategi": 1, "str": [1, 2], "A": [1, 2], "string": [1, 2], "indic": [1, 2, 4], "ar": [1, 2, 4], "choic": 1, "basic": 1, "memory_balanc": 1, "default": [1, 2], "column_slice_threshold": [1, 4], "int": [1, 2], "none": [1, 2, 4], "column": [1, 4], "slice": [1, 4], "happen": [1, 2], "when": [1, 2], "than": [1, 3], "In": 1, "case": 1, "choos": 1, "so": [1, 4], "each": [1, 4], "receiv": 1, "least": 1, "one": [1, 2], "element": [1, 4], "divid": 1, "n": [1, 2], "even": 1, "piec": 1, "alon": 1, "width": 1, "dimens": [1, 2, 4], "smallest": [1, 4], "power": [1, 4], "smaller": [1, 4], "row_slic": 1, "tbd": 1, "describ": 1, "which": 1, "need": [1, 2], "row": [1, 2], "dp_input": 1, "bool": 1, "true": 1, "take": [1, 4], "input": [1, 2, 4], "shape": [1, 2, 4], "local_batch_s": 1, "x": 1, "global_num_embed": 1, "otherwis": [1, 2], "model": [1, 2, 3], "paral": 1, "global_batch_s": 1, "local_num_embed": 1, "input_table_map": [1, 4], "same": [1, 2, 4], "length": [1, 2], "map": [1, 4], "mean": [1, 2, 4], "number": [1, 4], "get_weight": 1, "all_rank": 1, "fals": 1, "return": [1, 2, 4], "current": [1, 4], "weight": [1, 2], "numpi": 1, "arrai": 1, "overrid": [1, 2], "output": [1, 2, 4], "global": 1, "rank": 1, "0": [1, 2, 4], "result": 1, "tensor": [1, 2, 4], "set_weight": 1, "chunk": 1, "134217728": 1, "use_lock": 1, "set": 1, "from": [1, 2, 4], "contain": [1, 2, 4], "item": 1, "either": 1, "file": 1, "path": 1, "load": 1, "max": 1, "per": [1, 2], "round": 1, "lock": 1, "step": [1, 2], "avoid": 1, "oom": 1, "rais": [1, 2], "valueerror": [1, 2], "doe": [1, 2], "match": [1, 2], "expect": [1, 2], "broadcast_vari": [1, 4], "model_var": 1, "root_rank": [1, 4], "broadcast": [1, 4], "variabl": [1, 2, 4], "root": 1, "other": 1, "process": 1, "replac": [1, 4], "http": 1, "readthedoc": 1, "en": 1, "stabl": 1, "html": 1, "distributedgradienttap": [1, 4], "graident": 1, "tape": [1, 4], "support": [1, 2, 4], "turn": 2, "vector": 2, "fix": [2, 4], "size": [2, 4], "input_dim": 2, "vocabulari": 2, "maximum": 2, "index": [2, 3], "1": [2, 4], "output_dim": 2, "embeddings_initi": 2, "initi": 2, "matrix": 2, "embeddings_regular": 2, "regular": [2, 4], "appli": [2, 4], "embeddings_constraint": 2, "constraint": 2, "reduct": 2, "method": 2, "sum": [2, 4], "respect": 2, "d1": 2, "dn": 2, "raggedtensor": [2, 4], "batch_siz": 2, "ragged_dim": 2, "sparsetensor": 2, "max_hot": 2, "pick": 2, "last": [2, 4], "reduc": [2, 4], "given": 2, "build": 2, "input_shap": 2, "creat": 2, "option": 2, "subclass": 2, "implement": 2, "thei": 2, "state": 2, "creation": 2, "between": 2, "instanti": 2, "call": [2, 4], "invok": 2, "befor": 2, "first": [2, 4], "execut": 2, "typic": 2, "discret": 2, "instanc": 2, "tensorshap": 2, "compute_output_shap": 2, "comput": 2, "caus": 2, "built": 2, "ha": 2, "requir": 2, "here": 2, "tupl": 2, "integ": 2, "structur": 2, "includ": 2, "free": 2, "instead": 2, "an": 2, "classmethod": 2, "from_config": 2, "config": 2, "its": 2, "instati": 2, "fast": 2, "get_config": 2, "dictionari": 2, "serializ": 2, "configur": 2, "reinstanti": 2, "connect": 2, "inform": 2, "nor": 2, "name": 2, "These": 2, "network": 2, "abstract": 2, "abov": 2, "guarante": 2, "fresh": 2, "copi": 2, "dict": 2, "everi": 2, "time": 2, "caller": 2, "should": 2, "want": 2, "modifi": 2, "embedding_lookup_op": 2, "param": 2, "id": [2, 4], "look": [2, 4], "up": [2, 4], "repres": 2, "complet": 2, "2d": [2, 4], "int32": [2, 4], "int64": [2, 4], "type": 2, "valu": 2, "row_split": 2, "col_index": 2, "row_index": 2, "csr": 2, "format": 2, "hot": [2, 4], "thu": 2, "construct": 2, "typeerror": 2, "empti": 2, "larger": 3, "dmp": 4, "myembeddingmodel": 4, "def": 4, "__init__": 4, "self": 4, "embedding_lay": 4, "table_s": 4, "add": 4, "wrap": 4, "distributedembed": 4, "embedding_output": 4, "zip": 4, "gradienttap": 4, "follow": 4, "training_step": 4, "label": 4, "first_batch": 4, "prob": 4, "loss_valu": 4, "loss": 4, "gradient": 4, "hvd": 4, "grad": 4, "trainable_vari": 4, "opt": 4, "apply_gradi": 4, "both": 4, "two": 4, "kind": 4, "them": 4, "opposit": 4, "confus": 4, "dens": 4, "spars": 4, "term": 4, "variou": 4, "differ": 4, "whether": 4, "sampl": 4, "batch": 4, "potenti": 4, "rag": 4, "while": 4, "inner": 4, "lookup": 4, "most": 4, "consid": 4, "One": 4, "1000": 4, "64": 4, "onehot_input": 4, "random": 4, "uniform": 4, "16": 4, "maxval": 4, "dtype": 4, "print": 4, "fixedhot_input": 4, "7": 4, "variablehot_input": 4, "constant": 4, "4": 4, "87": 4, "5": 4, "9": 4, "6": 4, "929": 4, "exce": 4, "portion": 4, "depend": 4, "optim": 4, "have": 4, "split": 4, "pass": 4, "20000000": 4, "byte": 4, "evenli": 4, "common": 4, "some": 4, "featur": 4, "For": 4, "watch": 4, "video": 4, "brows": 4}, "objects": {"distributed_embeddings": [[2, 0, 0, "-", "python"]], "distributed_embeddings.python.layers.dist_model_parallel": [[1, 1, 1, "", "DistributedEmbedding"], [1, 3, 1, "", "DistributedGradientTape"], [1, 3, 1, "", "broadcast_variables"]], "distributed_embeddings.python.layers.dist_model_parallel.DistributedEmbedding": [[1, 2, 1, "", "get_weights"], [1, 2, 1, "", "set_weights"]], "distributed_embeddings.python.layers.embedding": [[2, 1, 1, "", "Embedding"]], "distributed_embeddings.python.layers.embedding.Embedding": [[2, 2, 1, "", "build"], [2, 2, 1, "", "compute_output_shape"], [2, 2, 1, "", "from_config"], [2, 2, 1, "", "get_config"]], "distributed_embeddings.python.ops.embedding_lookup_ops": [[2, 3, 1, "", "embedding_lookup"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method", "3": "py:function"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"], "3": ["py", "function", "Python function"]}, "titleterms": {"distribut": [0, 3, 4], "embed": [0, 2, 3, 4], "featur": 0, "model": [0, 4], "parallel": [0, 4], "wrapper": 0, "layer": [0, 2, 4], "instal": 0, "requir": 0, "contain": 0, "build": 0, "from": 0, "sourc": 0, "feedback": 0, "support": 0, "dist_model_parallel": 1, "distributedembed": 1, "op": 2, "embedding_lookup": 2, "welcom": 3, "": 3, "document": 3, "introduct": 3, "user": 3, "guid": 3, "packag": 3, "refer": 3, "indic": 3, "tabl": [3, 4], "exampl": 4, "larger": 4, "than": 4, "gpu": 4, "memori": 4, "share": 4}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1, "sphinx": 57}, "alltitles": {"Distributed Embeddings": [[0, "distributed-embeddings"]], "Features": [[0, "features"]], "Distributed model parallel wrapper": [[0, "distributed-model-parallel-wrapper"]], "Embedding Layers": [[0, "embedding-layers"], [2, "embedding-layers"], [4, "embedding-layers"]], "Installation": [[0, "installation"]], "Requirements": [[0, "requirements"]], "Containers": [[0, "containers"]], "Build from source": [[0, "build-from-source"]], "Feedback and Support": [[0, "feedback-and-support"]], "dist_model_parallel": [[1, "dist-model-parallel"]], "DistributedEmbedding": [[1, "distributedembedding"]], "embedding": [[2, "module-distributed_embeddings.python"]], "Embedding": [[2, "id1"]], "Embedding Ops": [[2, "embedding-ops"]], "embedding_lookup": [[2, "embedding-lookup"]], "Welcome to distributed-embeddings\u2019s documentation!": [[3, "welcome-to-distributed-embeddings-s-documentation"]], "Introduction": [[3, null]], "User Guide": [[3, null]], "Package Reference": [[3, null]], "Indices and tables": [[3, "indices-and-tables"]], "Distributed Model Parallel": [[4, "distributed-model-parallel"]], "Examples:": [[4, "examples"]], "Larger than GPU memory table": [[4, "larger-than-gpu-memory-table"]], "Shared Embedding": [[4, "shared-embedding"]]}, "indexentries": {"distributedembedding (class in distributed_embeddings.python.layers.dist_model_parallel)": [[1, "distributed_embeddings.python.layers.dist_model_parallel.DistributedEmbedding"]], "distributedgradienttape() (in module distributed_embeddings.python.layers.dist_model_parallel)": [[1, "distributed_embeddings.python.layers.dist_model_parallel.DistributedGradientTape"]], "broadcast_variables() (in module distributed_embeddings.python.layers.dist_model_parallel)": [[1, "distributed_embeddings.python.layers.dist_model_parallel.broadcast_variables"]], "get_weights() (distributed_embeddings.python.layers.dist_model_parallel.distributedembedding method)": [[1, "distributed_embeddings.python.layers.dist_model_parallel.DistributedEmbedding.get_weights"]], "set_weights() (distributed_embeddings.python.layers.dist_model_parallel.distributedembedding method)": [[1, "distributed_embeddings.python.layers.dist_model_parallel.DistributedEmbedding.set_weights"]], "embedding (class in distributed_embeddings.python.layers.embedding)": [[2, "distributed_embeddings.python.layers.embedding.Embedding"]], "build() (distributed_embeddings.python.layers.embedding.embedding method)": [[2, "distributed_embeddings.python.layers.embedding.Embedding.build"]], "compute_output_shape() (distributed_embeddings.python.layers.embedding.embedding method)": [[2, "distributed_embeddings.python.layers.embedding.Embedding.compute_output_shape"]], "distributed_embeddings.python": [[2, "module-distributed_embeddings.python"]], "embedding_lookup() (in module distributed_embeddings.python.ops.embedding_lookup_ops)": [[2, "distributed_embeddings.python.ops.embedding_lookup_ops.embedding_lookup"]], "from_config() (distributed_embeddings.python.layers.embedding.embedding class method)": [[2, "distributed_embeddings.python.layers.embedding.Embedding.from_config"]], "get_config() (distributed_embeddings.python.layers.embedding.embedding method)": [[2, "distributed_embeddings.python.layers.embedding.Embedding.get_config"]], "module": [[2, "module-distributed_embeddings.python"]]}})