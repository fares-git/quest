let defaultData =
  [{
    "topic": "Java",
    "questions": [
      {
        "question": "Différence entre Java 8 et 11 ?",
        "textResponse": "Java 8 a introduit des changements majeurs comme les lambdas, streams, Optional et la nouvelle API Date/Time. Java 11, en plus des optimisations JVM, apporte l’API HTTP Client moderne, de nouvelles méthodes pour String (`isBlank`, `lines`, `repeat`), et la possibilité d’exécuter un fichier source directement. Java 11 supprime aussi des modules obsolètes comme Java EE et CORBA.",
        "keyWords": ["Java 8", "Java 11", "streams", "lambdas", "HTTP Client", "String methods"]
      },
      {
        "question": "Quelle est votre compréhension des interfaces fonctionnelles en Java ?",
        "textResponse": "Une interface fonctionnelle en Java est une interface qui ne définit qu'une seule méthode abstraite. Elle est la base des expressions lambda et des références de méthode introduites avec Java 8. L'annotation @FunctionalInterface permet de garantir au moment de la compilation que l'interface respecte cette contrainte. Exemples classiques : Runnable, Callable, Comparator.",
        "keyWords": ["interface fonctionnelle", "@FunctionalInterface", "lambda", "méthode abstraite unique", "Runnable", "Comparator"]
      },
      {
        "question": "Quelle est la différence entre equals() et == ?",
        "textResponse": "L'opérateur == compare les références mémoire, c'est-à-dire s'il s'agit du même objet en mémoire. La méthode equals(), elle, compare le contenu logique des objets, et peut être redéfinie pour définir l'égalité métier. Par exemple, deux objets String différents en mémoire peuvent être égaux s'ils contiennent les mêmes caractères.",
        "keyWords": ["equals()", "==", "référence", "contenu", "comparaison", "mémoire"]
      },
      {
        "question": "Qu'est-ce qu'un garbage collector en Java ?",
        "textResponse": "Le Garbage Collector (GC) est un mécanisme automatique de la JVM qui gère la mémoire. Il libère l’espace occupé par les objets qui ne sont plus accessibles, évitant ainsi les fuites mémoire. Il fonctionne en identifiant les objets vivants, nettoyant ceux qui ne le sont pas, et compactant éventuellement la mémoire.",
        "keyWords": ["Garbage Collector", "JVM", "mémoire", "fuites mémoire", "collecte", "compaction"]
      },
      {
        "question": "Quels sont les types de Garbage Collector ?",
        "textResponse": "Les principaux types de Garbage Collectors sont : Serial GC (mono-thread), Parallel GC (multi-thread optimisé pour le throughput), CMS (Concurrent Mark-Sweep, faible latence), G1 GC (Garbage First, équilibré et prédéfini par défaut depuis Java 9), et ZGC/ Shenandoah (orientés faible latence, haute scalabilité). Le choix dépend des besoins en latence et performance.",
        "keyWords": ["Serial GC", "Parallel GC", "CMS", "G1 GC", "ZGC", "Shenandoah", "latence", "throughput"]
      },
      {
        "question": "Qu'est-ce qu'un thread en Java ?",
        "textResponse": "Un thread est une unité d’exécution légère qui permet de réaliser plusieurs tâches en parallèle au sein d’un même processus. En Java, on peut créer un thread en étendant la classe Thread ou en implémentant Runnable. La gestion est assurée par la JVM, et les threads partagent la même mémoire, ce qui impose des mécanismes de synchronisation.",
        "keyWords": ["thread", "parallélisme", "Runnable", "synchronisation", "JVM", "concurrence"]
      },
      {
        "question": "Qu'est-ce qu'un constructeur en Java ?",
        "textResponse": "Un constructeur est une méthode spéciale utilisée pour initialiser un objet lors de sa création. Il porte le même nom que la classe, n’a pas de type de retour et peut être surchargé. Il permet d'initialiser des variables d’instance ou d’imposer certaines règles de création d’objet.",
        "keyWords": ["constructeur", "initialisation", "objet", "surcharge", "classe"]
      },
      {
        "question": "Quelle est la différence entre la surcharge (overloading) et la superposition (overriding) de méthodes ?",
        "textResponse": "La surcharge (overloading) consiste à définir plusieurs méthodes avec le même nom mais des signatures différentes (paramètres différents), dans la même classe. La redéfinition (overriding) consiste à réécrire une méthode héritée d’une classe parente avec la même signature, afin de changer ou d’étendre son comportement.",
        "keyWords": ["overloading", "overriding", "surcharge", "redéfinition", "signature", "héritage"]
      },
      {
        "question": "C'est quoi le mot clé static ?",
        "textResponse": "Le mot clé static en Java permet de déclarer des variables, méthodes ou blocs qui appartiennent à la classe plutôt qu’aux instances. Une variable statique est partagée par toutes les instances, et une méthode statique peut être appelée sans créer d’objet. Cela permet notamment de gérer des utilitaires ou des constantes.",
        "keyWords": ["static", "méthode statique", "variable statique", "classe", "instance", "partagé"]
      },
      {
        "question": "Qu'est-ce qu'un bloc statique en Java ?",
        "textResponse": "Un bloc statique est exécuté une seule fois lors du chargement de la classe en mémoire par la JVM. Il sert à initialiser des variables statiques complexes ou à exécuter du code de configuration. Il est exécuté avant tout constructeur ou toute méthode statique.",
        "keyWords": ["bloc statique", "JVM", "initialisation", "classe", "variable statique"]
      },
      {
        "question": "Quelle est la différence entre les méthodes statiques et non statiques ?",
        "textResponse": "Une méthode statique appartient à la classe et peut être appelée sans créer d’objet, mais elle ne peut pas accéder directement aux variables ou méthodes d’instance. Une méthode non statique appartient à une instance, et peut donc manipuler les variables d’instance et appeler d’autres méthodes d’instance.",
        "keyWords": ["méthode statique", "méthode non statique", "classe", "instance", "variables"]
      }
      ,
      {
        "question": "Qu'est-ce qu'un Package en Java ?",
        "textResponse": "Un package en Java est un mécanisme de regroupement logique de classes, interfaces et sous-packages pour mieux organiser le code et éviter les conflits de noms. Il permet aussi de gérer la visibilité grâce aux modificateurs d'accès (public, protected, private, default). Les packages standards comme java.util ou java.io fournissent des bibliothèques prêtes à l'emploi.",
        "keyWords": ["package", "organisation", "namespace", "visibilité", "java.util", "java.io"]
      },
      {
        "question": "Quelle est la différence entre String et StringBuilder ?",
        "textResponse": "String est immuable : toute modification crée un nouvel objet en mémoire, ce qui peut être coûteux en performance lorsqu’on manipule beaucoup de texte. StringBuilder est mutable et permet de modifier directement le contenu sans recréer d’objets, ce qui le rend plus performant pour des opérations répétées comme concaténation.",
        "keyWords": ["String", "StringBuilder", "immuable", "mutable", "concaténation", "performance"]
      },
      {
        "question": "Quelle est la différence entre les classes StringBuilder et StringBuffer en Java ?",
        "textResponse": "StringBuilder et StringBuffer sont tous deux mutables et utilisés pour manipuler des chaînes. La différence est que StringBuffer est thread-safe car ses méthodes sont synchronisées, ce qui le rend plus lent. StringBuilder est non synchronisé, donc plus rapide mais non sûr en environnement multi-thread.",
        "keyWords": ["StringBuilder", "StringBuffer", "mutable", "synchronisation", "thread-safe", "performance"]
      },
      {
        "question": "Quelle est la différence entre les classes String, StringBuilder et StringBuffer en Java ?",
        "textResponse": "String est immuable et utilisé pour des textes constants. StringBuilder est mutable, non synchronisé, performant pour une utilisation mono-thread. StringBuffer est mutable mais synchronisé, donc plus adapté aux environnements multi-thread mais moins performant que StringBuilder.",
        "keyWords": ["String", "StringBuilder", "StringBuffer", "immuable", "mutable", "thread-safe"]
      },
      {
        "question": "Qu'est-ce que le mot-clé volatile ?",
        "textResponse": "Le mot-clé volatile garantit que la valeur d'une variable est toujours lue et écrite directement en mémoire principale, et non depuis un cache de thread. Cela assure la visibilité des changements entre threads, mais ne garantit pas l’exécution atomique des opérations.",
        "keyWords": ["volatile", "mémoire principale", "thread", "visibilité", "concurrence"]
      },
      {
        "question": "Qu'est-ce que le mot-clé synchronized en Java ?",
        "textResponse": "Le mot-clé synchronized garantit qu’un seul thread à la fois peut accéder à une méthode ou un bloc de code synchronisé. Il est utilisé pour gérer l’accès concurrent aux ressources partagées, en assurant l’exclusion mutuelle et en évitant les conditions de course.",
        "keyWords": ["synchronized", "thread", "exclusion mutuelle", "bloc synchronisé", "condition de course"]
      },
      {
        "question": "Qu'est-ce qu’une méthode synchronisée (thread-safe) en Java ?",
        "textResponse": "Une méthode synchronisée est une méthode dont l’accès est contrôlé par le mot-clé synchronized. Elle garantit qu’un seul thread peut l’exécuter à la fois, protégeant ainsi l’intégrité des données partagées. Cela rend la méthode thread-safe, mais peut introduire un coût en performance dû au verrouillage.",
        "keyWords": ["méthode synchronisée", "thread-safe", "synchronized", "verrouillage", "concurrence"]
      },
      {
        "question": "Qu'est-ce qu'un bloc try-catch en Java ?",
        "textResponse": "Le bloc try-catch est une structure de gestion des exceptions. Le code susceptible de générer une exception est placé dans le bloc try, et les exceptions levées sont interceptées et traitées dans le bloc catch. Il permet d’éviter les plantages brutaux et de gérer les erreurs de manière contrôlée.",
        "keyWords": ["try-catch", "exceptions", "gestion d'erreurs", "traitement", "Java"]
      },
      {
        "question": "Quelle est la différence entre les exceptions vérifiées (checked exceptions) et non vérifiées (unchecked exceptions) en Java ?",
        "textResponse": "Les exceptions vérifiées (checked) sont contrôlées à la compilation, et le développeur doit les gérer explicitement avec try-catch ou throws (ex : IOException). Les exceptions non vérifiées (unchecked) héritent de RuntimeException et sont détectées uniquement à l’exécution (ex : NullPointerException).",
        "keyWords": ["checked exceptions", "unchecked exceptions", "compilation", "RuntimeException", "IOException"]
      },
      {
        "question": "Quelle est la différence entre un constructeur et une méthode en Java?",
        "textResponse": "Un constructeur sert à initialiser un objet lors de sa création. Il porte le même nom que la classe et n’a pas de type de retour. Une méthode, en revanche, définit un comportement que l’objet peut exécuter après sa création. Les constructeurs ne sont pas hérités, contrairement aux méthodes.",
        "keyWords": ["constructeur", "méthode", "initialisation", "objet", "retour", "héritage"]
      },
      {
        "question": "Qu’est-ce que le mot abstract ?",
        "textResponse": "Le mot-clé abstract est utilisé pour déclarer une classe ou une méthode abstraite. Une méthode abstraite n’a pas de corps et doit être implémentée par les sous-classes. Une classe abstraite peut contenir des méthodes abstraites et concrètes, et ne peut pas être instanciée directement.",
        "keyWords": ["abstract", "classe abstraite", "méthode abstraite", "implémentation", "héritage"]
      },
      {
        "question": "Qu’est-ce qu’une classe abstraite ?",
        "textResponse": "Une classe abstraite est une classe qui ne peut pas être instanciée directement et sert de modèle pour d’autres classes. Elle peut contenir des méthodes abstraites (sans implémentation) et des méthodes concrètes. Elle est utilisée pour définir des comportements communs partagés entre plusieurs sous-classes.",
        "keyWords": ["classe abstraite", "modèle", "méthodes abstraites", "méthodes concrètes", "héritage"]
      },
      {
        "question": "Quelle est la différence entre une classe abstraite et une interface ?",
        "textResponse": "Une interface définit uniquement des contrats (méthodes abstraites par défaut), tandis qu’une classe abstraite peut contenir une implémentation partielle. Une classe peut implémenter plusieurs interfaces, mais ne peut hériter que d’une seule classe abstraite. Depuis Java 8, les interfaces peuvent avoir des méthodes par défaut et statiques.",
        "keyWords": ["classe abstraite", "interface", "implémentation partielle", "héritage", "Java 8"]
      },
      {
        "question": "Qu’est-ce que l’héritage en Java ?",
        "textResponse": "L’héritage est un mécanisme orienté objet qui permet à une classe (sous-classe) de réutiliser et d’étendre les propriétés et comportements d’une autre classe (super-classe). Il favorise la réutilisation du code et le polymorphisme. En Java, il est implémenté avec le mot-clé extends.",
        "keyWords": ["héritage", "sous-classe", "super-classe", "réutilisation", "polymorphisme", "extends"]
      },
      {
        "question": "Qu’est-ce que le polymorphisme en Java ?",
        "textResponse": "Le polymorphisme permet à une même méthode d’avoir des comportements différents selon l’objet qui l’invoque. Il peut être de deux types : polymorphisme de compilation (surcharge) et polymorphisme d’exécution (redéfinition). Il est essentiel pour l’abstraction et la flexibilité du code.",
        "keyWords": ["polymorphisme", "surcharge", "redéfinition", "abstraction", "flexibilité"]
      },
      {
        "question": "Qu’est-ce que l'encapsulation en Java ?",
        "textResponse": "L’encapsulation est le principe d’isoler l’état interne d’un objet en le protégeant par des modificateurs d’accès (private, protected, public). Les données ne sont accessibles qu’au travers de getters et setters, ce qui renforce la sécurité, la modularité et la maintenabilité du code.",
        "keyWords": ["encapsulation", "modificateurs d'accès", "private", "getters", "setters", "sécurité"]
      },
      {
        "question": "Qu'est-ce qu'un objet immuable ?",
        "textResponse": "Un objet immuable est un objet dont l’état ne peut pas changer après sa création. Par exemple, la classe String est immuable. Les objets immuables sont thread-safe par conception et favorisent la sécurité et la prédictibilité du code.",
        "keyWords": ["objet immuable", "immutabilité", "String", "thread-safe", "sécurité"]
      },
      {
        "question": "Comment créer une classe immuable ?",
        "textResponse": "Pour créer une classe immuable, il faut : déclarer la classe comme finale, rendre tous les champs privés et finals, ne fournir que des getters sans setters, et retourner des copies défensives pour les objets mutables. Ainsi, l’état de l’objet ne peut jamais être modifié après sa création.",
        "keyWords": ["classe immuable", "final", "champs privés", "getters", "setters", "copie défensive"]
      }
      ,
      {
        "question": "Quelle est la différence entre les mots-clés this et super en Java",
        "textResponse": "En Java, le mot-clé this fait référence à l’instance courante de la classe et permet d’accéder à ses attributs, méthodes ou constructeurs. Il est utile pour lever les ambiguïtés dans le cas d’un champ et d’un paramètre ayant le même nom, et permet d’appeler un autre constructeur de la même classe via this(). Le mot-clé super, quant à lui, fait référence à la classe parente immédiate. Il sert à accéder aux méthodes ou attributs hérités, mais aussi à invoquer explicitement un constructeur parent via super().",
        "keyWords": ["this", "super", "instance courante", "classe parente", "constructeur"]
      },
      {
        "question": "Quel est le rôle du mot-clé override en Java ?",
        "textResponse": "L’annotation @Override en Java indique qu’une méthode redéfinit une méthode héritée d’une classe parente ou implémentée via une interface. Son rôle principal est de garantir la cohérence du code en forçant le compilateur à vérifier que la méthode existe réellement dans la hiérarchie. Elle améliore la lisibilité du code, prévient les erreurs de typage et assure un comportement conforme au polymorphisme.",
        "keyWords": ["@Override", "redéfinition", "héritage", "interface", "polymorphisme"]
      },
      {
        "question": "Quelles sont les familles/catégories d’exceptions en Java ?",
        "textResponse": "En Java, les exceptions se divisent en deux grandes catégories : les checked exceptions et les unchecked exceptions. Les checked exceptions (comme IOException ou SQLException) doivent être capturées ou déclarées dans la signature des méthodes. Les unchecked exceptions regroupent RuntimeException et ses sous-classes (NullPointerException, IllegalArgumentException…), et ne nécessitent pas de déclaration explicite. Enfin, les erreurs (Error) comme OutOfMemoryError indiquent des problèmes graves du système que l’application ne peut généralement pas gérer.",
        "keyWords": ["checked exceptions", "unchecked exceptions", "RuntimeException", "Error", "gestion des erreurs"]
      },
      {
        "question": "A quoi sert « Final » ? Où ne peut-on pas mettre le mot clé « final » ?",
        "textResponse": "Le mot-clé final en Java a plusieurs usages : appliqué à une variable, il empêche sa réassignation après initialisation ; appliqué à une méthode, il interdit sa redéfinition dans les sous-classes ; appliqué à une classe, il empêche son héritage. On ne peut pas utiliser final sur des constructeurs, car par définition ils ne sont pas hérités ni redéfinis. L’usage correct de final favorise l’immutabilité, la sécurité du code et l’optimisation par la JVM.",
        "keyWords": ["final", "variable constante", "méthode non redéfinissable", "classe non héritable", "immutabilité"]
      },
      {
        "question": "Qu’est-ce qu’une Queue en java ?",
        "textResponse": "En Java, une Queue est une interface de la collection framework qui suit une structure FIFO (First-In, First-Out). Elle est utilisée pour gérer des files d’attente d’éléments. Ses implémentations incluent LinkedList, PriorityQueue ou ArrayDeque. La Queue propose des méthodes spécifiques comme offer(), poll(), peek() pour l’ajout, le retrait ou la consultation d’éléments. Elle est très utilisée pour des scénarios de traitement asynchrone ou de gestion de tâches.",
        "keyWords": ["Queue", "FIFO", "LinkedList", "PriorityQueue", "offer", "poll", "peek"]
      }
      ,
      {
        "question": "Comment tu sais sur quelle version de Java tu développes ?",
        "textResponse": "Pour connaître la version de Java utilisée, on peut exécuter la commande java -version dans le terminal, ou vérifier la propriété système java.version dans l’application. Dans un projet Maven, la version Java est spécifiée dans le fichier pom.xml via le plugin maven-compiler-plugin. Avec Gradle, elle est configurée dans le build.gradle. Enfin, les IDE comme IntelliJ ou Eclipse affichent aussi la version du JDK utilisé.",
        "keyWords": ["java -version", "System.getProperty", "pom.xml", "maven-compiler-plugin", "Gradle"]
      },
      {
        "question": "Comment tu sais que tu es en Java 8 ?",
        "textResponse": "On peut confirmer qu’on est en Java 8 grâce à la sortie de la commande java -version (affichant 1.8.x). Par ailleurs, Java 8 introduit des fonctionnalités clés comme les lambdas, les streams, l’API Date/Time java.time, et les interfaces avec méthodes par défaut. Si ces fonctionnalités sont disponibles et utilisables, cela confirme qu’on est bien en Java 8.",
        "keyWords": ["Java 8", "java -version", "lambdas", "streams", "java.time", "default methods"]
      },
      {
        "question": "Est-ce que tu as déjà manipulé les stream ?",
        "textResponse": "Oui, les Streams en Java 8 permettent de traiter des collections de données de manière déclarative et fonctionnelle. On peut enchaîner des opérations comme filter(), map(), sorted(), collect(), tout en profitant du parallélisme via parallelStream(). Ils favorisent un code plus concis, expressif et optimisé, notamment pour le traitement massif de données.",
        "keyWords": ["Java Streams", "filter", "map", "collect", "parallelStream", "programmation fonctionnelle"]
      },
      {
        "question": "Peux-tu me donner les nouveautés de Java 8 que tu manipules au quotidien ?",
        "textResponse": "Les nouveautés majeures de Java 8 incluent : les expressions lambda, les streams, les interfaces avec méthodes par défaut et statiques, la nouvelle API Date/Time (java.time), et les Optional pour gérer l’absence de valeur. Ces fonctionnalités permettent une programmation plus fonctionnelle, réduisent le boilerplate et améliorent la lisibilité et la robustesse du code.",
        "keyWords": ["Java 8", "lambdas", "streams", "Optional", "java.time", "default methods"]
      },
      {
        "question": "Est-ce que tu as déjà manipulé les expressions Lambda ? les références de méthodes ?",
        "textResponse": "Oui, les lambdas en Java 8 permettent d’écrire des fonctions anonymes de manière concise, notamment pour passer du comportement en paramètre (exemple : list.stream().filter(x -> x > 5)). Les références de méthodes (::) offrent encore plus de lisibilité, par exemple String::toUpperCase au lieu de x -> x.toUpperCase(). Elles s’utilisent avec les interfaces fonctionnelles comme Predicate, Consumer, Supplier, ou Function.",
        "keyWords": ["Java 8", "lambda", "method reference", "Predicate", "Consumer", "Supplier", "Function"]
      }
      ,
      {
        "question": "C’est quoi les nouveautés de Java 11 ?",
        "textResponse": "Java 11 a introduit des nouveautés comme l’exécution directe de fichiers source avec `java file.java`, la nouvelle API HTTP Client (remplaçant HttpURLConnection), la gestion des chaînes avec `isBlank()`, `lines()`, `repeat()`, ainsi que la suppression de modules obsolètes comme Java EE et CORBA.",
        "keyWords": ["Java 11", "API HTTP Client", "String methods", "CORBA removal"]
      },

      {
        "question": "C’est quoi la différence entre List et Set en Java ?",
        "textResponse": "Une List permet de stocker des éléments en ordre avec des doublons possibles, et on peut accéder par index. Un Set ne permet pas de doublons et n’a pas de notion d’index ; les éléments sont uniques et souvent utilisés pour éviter les répétitions.",
        "keyWords": ["List", "Set", "Java Collections", "doublons", "index"]
      },

      {
        "question": "Comment tu peux comparer deux objets ?",
        "textResponse": "On peut comparer deux objets en Java soit avec `equals()` (comparaison de contenu), soit avec `==` (comparaison de références). Pour un ordre naturel, on utilise `Comparable` (méthode compareTo), ou un `Comparator` pour un tri personnalisé.",
        "keyWords": ["equals", "==", "Comparable", "Comparator"]
      },
      {
        "question": "Comment tu créais la méthode equals ?",
        "textResponse": "La bonne pratique est de comparer les champs pertinents de l’objet, en respectant le contrat equals/hashCode. Exemple : vérifier si l’objet est de la même classe, puis comparer les attributs clés. En pratique, on utilise souvent `Objects.equals()` pour simplifier.",
        "keyWords": ["equals", "hashCode", "contrat", "Objects.equals"]
      },

      {
        "question": "Est-ce que tu as déjà manipulé les dates dans Java 8 ? Comment tu fais ?",
        "textResponse": "Oui, avec l’API Date and Time (`java.time`). On utilise `LocalDate`, `LocalDateTime`, `ZonedDateTime`, et la classe `DateTimeFormatter` pour formater. Cela remplace l’ancienne API `Date` et `Calendar` qui étaient complexes et peu thread-safe.",
        "keyWords": ["Java 8", "LocalDate", "LocalDateTime", "DateTimeFormatter"]
      },
      {
        "question": "Peux-tu m’expliquer le principe de l’héritage multiple en Java ?",
        "textResponse": "Java ne supporte pas l’héritage multiple de classes pour éviter le problème du diamant, mais il supporte l’héritage multiple via les interfaces. Depuis Java 8, les interfaces peuvent contenir des méthodes par défaut (`default methods`), ce qui permet une forme limitée d’héritage multiple.",
        "keyWords": ["héritage multiple", "Java", "interfaces", "default methods"]
      },
      {
        "question": "Expliquez la différence entre final, finally et finalize.",
        "textResponse": "En Java, 'final' est un mot-clé utilisé pour déclarer des constantes, empêcher l'héritage d'une classe ou l'override d'une méthode. 'finally' est un bloc optionnel qui suit un try-catch et s'exécute toujours pour libérer des ressources, même si une exception est levée. 'finalize' est une méthode héritée de Object qui est appelée par le garbage collector avant de détruire un objet, mais son utilisation est déconseillée car non déterministe.",
        "keyWords": ["final", "finally", "finalize", "constante", "exception", "garbage collector"]
      },
      {
        "question": "Comment fonctionne le ramasse-miettes (Garbage Collection) en Java ?",
        "textResponse": "Le garbage collector (GC) gère automatiquement la mémoire en identifiant les objets inaccessibles et en libérant leur espace. Java utilise plusieurs algorithmes comme Serial, Parallel, CMS et G1. Les objets passent par différentes générations (Young, Old, Permanent) pour optimiser les performances et réduire les pauses applicatives.",
        "keyWords": ["garbage collector", "mémoire", "jeunes/anciennes générations", "Serial", "Parallel", "CMS", "G1"]
      },
      {
        "question": "Qu'est-ce que la programmation multithread et comment fonctionne-t-elle en Java ?",
        "textResponse": "La programmation multithread permet d'exécuter plusieurs threads simultanément pour améliorer la performance et la réactivité. En Java, on peut créer des threads via l'interface Runnable ou en étendant la classe Thread. La synchronisation et les mécanismes comme volatile, locks, et ExecutorService sont utilisés pour gérer la concurrence et éviter les conditions de course.",
        "keyWords": ["multithread", "Runnable", "Thread", "synchronization", "volatile", "ExecutorService"]
      },
      {
        "question": "Expliquez la différence entre HashMap, TreeMap, et LinkedHashMap.",
        "textResponse": "HashMap stocke les entrées de manière non ordonnée et offre des accès O(1) en moyenne. TreeMap trie les clés selon l'ordre naturel ou un comparateur, offrant un accès O(log n). LinkedHashMap maintient l'ordre d'insertion ou d'accès avec une complexité O(1) moyenne, ce qui le rend utile pour des caches avec LRU.",
        "keyWords": ["HashMap", "TreeMap", "LinkedHashMap", "ordre", "complexité", "LRU"]
      },
      {
        "question": "Que se passe-t-il si deux objets ont le même hashCode dans une HashMap ?",
        "textResponse": "Si deux objets ont le même hashCode, ils tombent dans le même bucket de la HashMap. Java utilise la méthode equals() pour distinguer les clés. Cette collision est gérée via des listes chaînées ou arbres rouge-noir à partir de Java 8 pour maintenir les performances.",
        "keyWords": ["hashCode", "collision", "equals", "bucket", "HashMap"]
      },
      {
        "question": "Pourquoi HashMap n’est pas thread-safe ? Alternatives ?",
        "textResponse": "HashMap n’est pas thread-safe car ses opérations ne sont pas synchronisées, ce qui peut entraîner des corruptions de données en concurrence. Alternatives : ConcurrentHashMap pour un accès concurrent sécurisé, Collections.synchronizedMap pour une synchronisation simple.",
        "keyWords": ["HashMap", "thread-safe", "ConcurrentHashMap", "synchronizedMap"]
      },
      {
        "question": "Complexité de ArrayList vs HashSet ?",
        "textResponse": "ArrayList a un accès en O(1) par index mais la recherche est O(n). HashSet offre un accès et recherche en O(1) en moyenne, mais ne conserve pas l'ordre. Le choix dépend donc de la nécessité d'ordre et de performance de recherche.",
        "keyWords": ["ArrayList", "HashSet", "complexité", "recherche", "accès"]
      },
      {
        "question": "Pourquoi String est-elle immuable en Java ?",
        "textResponse": "Les Strings sont immuables pour des raisons de sécurité, d'optimisation et de gestion du cache (String Pool). Cela permet de partager des instances, de sécuriser les clés en HashMap et de rendre les chaînes thread-safe.",
        "keyWords": ["String", "immuable", "sécurité", "String Pool", "thread-safe"]
      },
      {
        "question": "Comment créer un singleton en Java ?",
        "textResponse": "On peut créer un singleton avec un constructeur privé et une instance statique unique accessible via une méthode getInstance(). Pour les versions thread-safe, on utilise le pattern Enum, l'initialisation statique ou le double-checked locking.",
        "keyWords": ["singleton", "private constructor", "getInstance", "Enum", "thread-safe"]
      },
      {
        "question": "Expliquer les concepts de synchronized et de volatile.",
        "textResponse": "synchronized garantit qu'une seule thread peut accéder à un bloc ou une méthode critique à la fois, prévenant les conditions de course. volatile assure la visibilité immédiate des changements de valeur d'une variable entre threads sans verrou explicite.",
        "keyWords": ["synchronized", "volatile", "thread-safety", "visibilité", "condition de course"]
      },
      {
        "question": "Quelle est la différence entre un bloc try-catch et un bloc try-with-resources ?",
        "textResponse": "try-catch permet de gérer les exceptions en encapsulant du code risqué. try-with-resources est une variante qui ferme automatiquement les ressources (ex: fichiers, streams) implémentant AutoCloseable à la fin du bloc, évitant les fuites mémoire.",
        "keyWords": ["try-catch", "try-with-resources", "AutoCloseable", "exceptions", "ressources"]
      },
      {
        "question": "Qu'est-ce qu'un Callable et en quoi est-il différent de Runnable ?",
        "textResponse": "Runnable définit une tâche à exécuter sans retour et ne peut pas lancer d'exception checked. Callable permet de retourner un résultat et de lever des exceptions checked. Les deux peuvent être exécutés par ExecutorService.",
        "keyWords": ["Runnable", "Callable", "resultat", "exception", "ExecutorService"]
      },
      {
        "question": "Quelle est la différence entre ArrayList et LinkedList ?",
        "textResponse": "ArrayList est basé sur un tableau dynamique, avec un accès direct O(1) mais insertion/suppression coûteuse O(n) sauf à la fin. LinkedList est basé sur des nœuds chaînés, insertion/suppression O(1) si le nœud est connu, mais accès par index O(n).",
        "keyWords": ["ArrayList", "LinkedList", "complexité", "accès", "insertion"]
      },
      {
        "question": "Expliquez le fonctionnement du hashCode() et equals() en Java.",
        "textResponse": "hashCode() fournit un entier représentant l'objet pour le placement dans des structures comme HashMap. equals() détermine l'égalité logique entre objets. Les deux doivent être cohérents : si equals retourne true, hashCode doit être identique pour garantir l'intégrité des collections basées sur le hash.",
        "keyWords": ["hashCode", "equals", "HashMap", "égalité", "cohérence"]
      },
      {
        "question": "Quelle est la différence entre une classe Thread et l'interface Runnable ?",
        "textResponse": "Thread est une classe concrète qui représente un thread d'exécution. Runnable est une interface fonctionnelle permettant de définir la tâche à exécuter. Utiliser Runnable permet d'étendre d'autres classes et favorise la séparation logique entre tâche et exécution.",
        "keyWords": ["Thread", "Runnable", "thread d’exécution", "interface", "séparation"]
      },
      {
        "question": "Comment fonctionne le ConcurrentHashMap ?",
        "textResponse": "ConcurrentHashMap permet un accès concurrent sécurisé en segmentant l'accès aux buckets. Les lectures sont généralement non bloquantes, et les écritures utilisent un verrou fin pour maximiser la performance en environnement multithread.",
        "keyWords": ["ConcurrentHashMap", "concurrent", "verrouillage fin", "performance", "multithread"]
      },
      {
        "question": "Quelle est la différence entre un constructeur par défaut et un constructeur avec paramètres ?",
        "textResponse": "Un constructeur par défaut n'a pas de paramètres et initialise les objets avec des valeurs par défaut. Un constructeur avec paramètres permet d'initialiser l'objet avec des valeurs spécifiques au moment de la création.",
        "keyWords": ["constructeur par défaut", "constructeur paramétré", "initialisation"]
      },
      {
        "question": "Que se passe-t-il si la méthode main() n'est pas static ?",
        "textResponse": "La JVM ne peut pas appeler main() directement sans créer une instance de la classe, ce qui provoque une erreur au démarrage. main() doit être static pour être accessible sans instanciation de l’objet.",
        "keyWords": ["main", "static", "JVM", "erreur", "instanciation"]
      },
      {
        "question": "Comment implémenter une énumération (enum) en Java ?",
        "textResponse": "Une enum est une classe spéciale représentant un ensemble fini de constantes. On la déclare avec le mot-clé 'enum' et on peut y ajouter méthodes et attributs. Les enums sont typesafe et facilitent la maintenance.",
        "keyWords": ["enum", "constantes", "typesafe", "méthodes", "attributs"]
      },
      {
        "question": "Qu'est-ce que la réflexion en Java ?",
        "textResponse": "La réflexion permet d'examiner et manipuler les classes, méthodes, et champs au runtime, même privés. Elle est utilisée pour l’ORM, les frameworks de tests, ou pour instancier dynamiquement des objets.",
        "keyWords": ["réflexion", "runtime", "classes", "méthodes", "champs", "ORM"]
      },
      {
        "question": "Quelle est la différence entre une HashSet et une TreeSet ?",
        "textResponse": "HashSet est non ordonné et offre un accès O(1) moyen. TreeSet est ordonné selon l’ordre naturel ou un comparateur, avec un accès O(log n). TreeSet implémente NavigableSet et permet des opérations de plage et tri.",
        "keyWords": ["HashSet", "TreeSet", "ordre", "complexité", "NavigableSet"]
      },
      {
        "question": "Comment fonctionne une PriorityQueue ?",
        "textResponse": "PriorityQueue est une structure de données qui extrait les éléments selon leur priorité, généralement implémentée via un tas binaire. L’ordre est déterminé par le comparateur fourni ou l’ordre naturel des éléments.",
        "keyWords": ["PriorityQueue", "priorité", "tas binaire", "comparateur", "ordre naturel"]
      },
      {
        "question": "Qu'est-ce qu'une WeakHashMap et dans quel cas est-elle utilisée ?",
        "textResponse": "WeakHashMap utilise des clés référencées faiblement, permettant au garbage collector de supprimer automatiquement les entrées lorsque les clés ne sont plus accessibles ailleurs. Elle est utile pour des caches qui ne doivent pas empêcher la collecte mémoire.",
        "keyWords": ["WeakHashMap", "référence faible", "garbage collector", "cache"]
      },
      {
        "question": "Expliquez la différence entre un Iterator et un ListIterator.",
        "textResponse": "Iterator permet de parcourir une collection dans un sens et de retirer des éléments. ListIterator est spécifique aux List, permet la navigation bidirectionnelle et la modification des éléments lors du parcours.",
        "keyWords": ["Iterator", "ListIterator", "parcours", "bidirectionnel", "modification"]
      },
      {
        "question": "Quelle est la différence entre Collection, List et Set ?",
        "textResponse": "Collection est l’interface racine pour les structures de données. List est ordonnée et permet les doublons, Set est non ordonné et ne permet pas les doublons. Le choix dépend des contraintes de stockage et d’accès aux éléments.",
        "keyWords": ["Collection", "List", "Set", "ordre", "doublons"]
      }
      ,
      {
        "question": "Comment implémenter un tri personnalisé dans une List en utilisant Comparator ?",
        "textResponse": "En Java, on peut trier une List avec Collections.sort(list, comparator) ou list.sort(comparator). Comparator définit la logique de comparaison via la méthode compare(T o1, T o2). Cela permet de trier selon n’importe quel critère, ascendant, descendant ou complexe.",
        "keyWords": ["Comparator", "Collections.sort", "List.sort", "tri personnalisé", "compare"]
      },
      {
        "question": "Qu'est-ce qu'un NavigableMap et comment s'utilise-t-il ?",
        "textResponse": "NavigableMap est une extension de SortedMap qui fournit des méthodes pour naviguer dans la map selon les clés : lowerKey(), higherKey(), floorEntry(), ceilingEntry(), et des sous-maps via subMap(). TreeMap est une implémentation typique de NavigableMap.",
        "keyWords": ["NavigableMap", "SortedMap", "TreeMap", "subMap", "floorEntry", "ceilingEntry"]
      },
      {
        "question": "Comment rendre une collection synchronisée en Java ?",
        "textResponse": "On peut utiliser Collections.synchronizedList(), Collections.synchronizedSet() ou Collections.synchronizedMap() pour rendre une collection thread-safe. Pour un contrôle plus fin, les classes concurrentes comme ConcurrentHashMap ou CopyOnWriteArrayList sont préférables.",
        "keyWords": ["Collections.synchronizedList", "synchronizedSet", "synchronizedMap", "ConcurrentHashMap", "CopyOnWriteArrayList", "thread-safe"]
      },
      {
        "question": "Comment fonctionne la méthode removeIf() dans les collections ?",
        "textResponse": "removeIf() permet de supprimer tous les éléments d'une collection qui satisfont un prédicat fourni. Elle accepte un Predicate<T> et renvoie true si des éléments ont été retirés. C’est très utile pour filtrer des collections sans itération manuelle.",
        "keyWords": ["removeIf", "Predicate", "collection", "filtrage"]
      },
      {
        "question": "Expliquez l'interface Spliterator.",
        "textResponse": "Spliterator est une interface introduite en Java 8 pour parcourir et partitionner les éléments d’une collection, optimisée pour le traitement parallèle. Elle fournit tryAdvance(), forEachRemaining(), et trySplit() pour faciliter le stream processing.",
        "keyWords": ["Spliterator", "Java 8", "tryAdvance", "trySplit", "parallel stream"]
      },
      {
        "question": "Comment diagnostiquer une fuite mémoire en Java ? Quels outils recommandez-vous ?",
        "textResponse": "Pour diagnostiquer une fuite mémoire, on analyse les heap dumps et l'utilisation mémoire avec des outils comme VisualVM, JProfiler, YourKit ou Eclipse Memory Analyzer (MAT). On recherche les objets non libérés et les références persistantes qui empêchent le garbage collector de les nettoyer.",
        "keyWords": ["fuite mémoire", "heap dump", "VisualVM", "JProfiler", "MAT", "garbage collector"]
      },
      {
        "question": "Que se passe-t-il lors d’un OutOfMemoryError ?",
        "textResponse": "Un OutOfMemoryError se produit lorsque la JVM ne peut plus allouer d’espace mémoire pour un objet sur le heap. L’application peut planter ou devenir instable. Il est conseillé d’analyser les causes via heap dumps et de vérifier l’utilisation mémoire et les fuites.",
        "keyWords": ["OutOfMemoryError", "JVM", "heap", "allocation", "heap dump", "mémoire"]
      },
      {
        "question": "Quelle est la différence entre la heap et la stack dans la JVM ?",
        "textResponse": "La heap est la mémoire dynamique où sont stockés les objets et gérée par le garbage collector. La stack est utilisée pour l'exécution des méthodes et stocke les variables locales, les références et le retour de méthodes, avec un cycle de vie court et déterministe.",
        "keyWords": ["heap", "stack", "JVM", "garbage collector", "variables locales"]
      },
      {
        "question": "Qu'est-ce qu'un Optional en Java 8+ et pourquoi l’utiliser ?",
        "textResponse": "Optional est un conteneur qui peut contenir ou non une valeur non-nulle. Il permet d’éviter les NullPointerException et de rendre le code plus lisible et déclaratif grâce à des méthodes comme isPresent(), orElse(), map() et ifPresent().",
        "keyWords": ["Optional", "NullPointerException", "isPresent", "orElse", "map", "ifPresent"]
      },
      {
        "question": "Immuable vs Mutable",
        "textResponse": "Un objet immuable ne peut pas être modifié après sa création, assurant thread-safety et prévisibilité. Un objet mutable peut être modifié après création, ce qui nécessite souvent une synchronisation en environnement concurrent. Les Strings sont un exemple d’immutables, ArrayList d’objets mutables.",
        "keyWords": ["immutable", "mutable", "thread-safety", "prévisibilité", "synchronisation"]
      },
      {
        "question": "Comment éviter les effets de bord dans une méthode Java ?",
        "textResponse": "Pour éviter les effets de bord, il est conseillé d’écrire des méthodes pures : elles ne modifient pas l’état externe, ne dépendent que des paramètres et renvoient toujours le même résultat pour les mêmes entrées. L’usage d’objets immuables et de copies défensives est recommandé.",
        "keyWords": ["effets de bord", "méthodes pures", "immutabilité", "copies défensives"]
      },
      {
        "question": "Quelle est la différence entre une interface fonctionnelle et une classe anonyme ?",
        "textResponse": "Une interface fonctionnelle possède une seule méthode abstraite et peut être utilisée avec des expressions lambda. Une classe anonyme est une implémentation ad hoc d’une classe ou interface, pouvant avoir plusieurs méthodes et champs. Les interfaces fonctionnelles sont plus concises et orientées programmation fonctionnelle.",
        "keyWords": ["interface fonctionnelle", "classe anonyme", "lambda", "méthode unique", "programmation fonctionnelle"]
      },
      {
        "question": "Quelle est votre approche pour écrire du code testable et maintenable ?",
        "textResponse": "Pour écrire du code testable et maintenable, je privilégie la séparation des responsabilités, l’injection de dépendances, l’usage d’interfaces pour abstraire les implémentations, les méthodes pures, et la couverture de tests unitaires et d’intégration. Le code clair et documenté facilite la maintenance.",
        "keyWords": ["testable", "maintenable", "séparation de responsabilités", "injection de dépendances", "interfaces", "tests unitaires"]
      },
      {
        "question": "Que signifie le principe SOLID et comment l’appliquez-vous au quotidien ?",
        "textResponse": "SOLID regroupe cinq principes : Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion. Je les applique pour créer un code modulaire, testable et évolutif, avec des classes cohérentes, des interfaces spécifiques et des dépendances injectées plutôt que codées en dur.",
        "keyWords": ["SOLID", "SRP", "OCP", "LSP", "ISP", "DIP", "modulaire", "testable", "dépendances injectées"]
      },
      {
        "question": "Quelles sont les nouveautés clés de Java 11 que vous utilisez au quotidien ?",
        "textResponse": "Java 11 introduit des fonctionnalités comme les chaînes multi-lignes avec Text Blocks, la méthode isBlank() pour les Strings, les nouveaux utilitaires Collection.toArray(), var pour les lambda locaux, et un support amélioré de HTTP Client. Ces nouveautés simplifient et clarifient le code.",
        "keyWords": ["Java 11", "Text Blocks", "isBlank", "toArray", "HTTP Client", "var"]
      },
      {
        "question": "Quelle est la différence entre wait() et sleep() ?",
        "textResponse": "wait() est une méthode d'objet qui libère le verrou du monitor et suspend le thread jusqu'à notification (notify/notifyAll). sleep() est une méthode statique de Thread qui suspend le thread sans libérer le verrou. wait() est utilisée dans la coordination entre threads, sleep() pour la temporisation.",
        "keyWords": ["wait()", "sleep()", "Thread", "monitor", "notify", "temporisation", "coordination"]
      },
      {
        "question": "Comment fonctionne l'interface ExecutorService ?",
        "textResponse": "ExecutorService est une interface pour gérer un pool de threads et exécuter des tâches asynchrones. On soumet des Runnable ou Callable via submit() ou execute(), puis on peut arrêter le service via shutdown() ou shutdownNow(). Elle simplifie la gestion des threads et améliore la performance.",
        "keyWords": ["ExecutorService", "Runnable", "Callable", "submit", "execute", "thread pool", "shutdown"]
      },
      {
        "question": "Qu'est-ce que la classe CountDownLatch ?",
        "textResponse": "CountDownLatch permet de synchroniser des threads en attendant qu'un certain nombre d'événements se produisent. Un compteur est décrémenté avec countDown() et les threads en attente appellent await() jusqu'à ce que le compteur atteigne zéro.",
        "keyWords": ["CountDownLatch", "thread synchronization", "countDown", "await", "compteur"]
      },
      {
        "question": "Comment fonctionne la classe CyclicBarrier ?",
        "textResponse": "CyclicBarrier permet de synchroniser un groupe de threads à un point commun. Chaque thread appelle await() et attend que tous les threads du groupe arrivent. Une fois tous les threads réunis, le barrier se réinitialise, d'où le terme 'cyclic'.",
        "keyWords": ["CyclicBarrier", "synchronization", "await", "threads", "cyclic"]
      },
      {
        "question": "Qu'est-ce qu'un Future en Java ?",
        "textResponse": "Future représente le résultat d'une tâche asynchrone. On peut obtenir le résultat via get(), vérifier si la tâche est terminée avec isDone(), et annuler la tâche avec cancel(). Elle est souvent utilisée avec ExecutorService.",
        "keyWords": ["Future", "asynchronous", "get", "isDone", "cancel", "ExecutorService"]
      },
      {
        "question": "Quelle est la différence entre ReentrantLock et synchronized ?",
        "textResponse": "synchronized est un mécanisme de verrouillage implicite fourni par Java, simple mais limité. ReentrantLock est une classe offrant des fonctionnalités avancées : lock interruptible, tentative de lock avec timeout, et possibilité de libérer le verrou manuellement. ReentrantLock est plus flexible pour la concurrence complexe.",
        "keyWords": ["ReentrantLock", "synchronized", "lock", "thread safety", "concurrence"]
      },
      {
        "question": "Qu'est-ce qu'un Semaphore ?",
        "textResponse": "Semaphore est une classe de synchronisation qui contrôle l'accès à un nombre limité de ressources. On utilise acquire() pour obtenir un permis et release() pour le libérer. Il est utile pour limiter le nombre de threads accédant simultanément à une ressource.",
        "keyWords": ["Semaphore", "acquire", "release", "ressources", "synchronisation"]
      },
      {
        "question": "Comment fonctionne un BlockingQueue ?",
        "textResponse": "BlockingQueue est une interface de queue thread-safe qui bloque les opérations de lecture (take()) et d’écriture (put()) si la queue est vide ou pleine. Elle est utilisée pour le pattern producteur-consommateur.",
        "keyWords": ["BlockingQueue", "thread-safe", "take", "put", "producer-consumer"]
      },
      {
        "question": "Expliquez l'atomicité en programmation concurrente",
        "textResponse": "Une opération est atomique si elle s'exécute entièrement ou pas du tout, sans interruption. En Java, les opérations sur les types primitifs volatiles, AtomicInteger, AtomicReference et les sections synchronisées garantissent l'atomicité pour la concurrence.",
        "keyWords": ["atomicité", "AtomicInteger", "AtomicReference", "synchronized", "concurrence"]
      },
      {
        "question": "Qu'est-ce que le ThreadLocal en Java ?",
        "textResponse": "ThreadLocal fournit une variable locale à chaque thread. Chaque thread accède à sa propre copie, isolée des autres threads, ce qui évite les problèmes de concurrence pour des données spécifiques au thread.",
        "keyWords": ["ThreadLocal", "thread-specific", "isolation", "concurrence"]
      },
      {
        "question": "Expliquez les expressions lambda et les références de méthode.",
        "textResponse": "Les lambdas sont des expressions concises représentant des fonctions anonymes, souvent utilisées avec les interfaces fonctionnelles. Les références de méthode (::) permettent de passer directement une méthode existante comme lambda. Elles simplifient et rendent le code plus lisible.",
        "keyWords": ["lambda", "functional interface", "method reference", "::", "Java 8"]
      },
      {
        "question": "Qu'est-ce que l'API Stream et comment l'utilise-t-on ?",
        "textResponse": "L'API Stream permet de traiter des collections de manière déclarative et fonctionnelle. On peut filtrer, mapper, réduire, trier et collecter les éléments. Les opérations peuvent être séquentielles ou parallèles (parallelStream) pour optimiser la performance.",
        "keyWords": ["Stream", "Java 8", "filter", "map", "reduce", "collect", "parallelStream"]
      },
      {
        "question": "Comment fonctionne l'interface Optional ?",
        "textResponse": "Optional est un conteneur pour représenter la présence ou l'absence d'une valeur. On utilise isPresent(), ifPresent(), orElse(), map() et flatMap() pour manipuler la valeur sans risque de NullPointerException.",
        "keyWords": ["Optional", "isPresent", "ifPresent", "orElse", "map", "flatMap", "null-safety"]
      },
      {
        "question": "Quelle est la différence entre map() et flatMap() dans les Streams ?",
        "textResponse": "map() transforme chaque élément du stream en un autre objet, produisant un Stream de Stream si la transformation retourne un Stream. flatMap() aplatit ces streams imbriqués en un seul Stream continu, facilitant le traitement.",
        "keyWords": ["map", "flatMap", "Stream", "transformation", "flatten"]
      },
      {
        "question": "Comment utiliser la méthode collect() dans les Streams ?",
        "textResponse": "collect() est une opération terminale qui transforme un Stream en une collection ou un autre type de résultat via un Collector, comme Collectors.toList(), toSet(), groupingBy() ou joining(). Elle est essentielle pour récupérer les résultats des pipelines.",
        "keyWords": ["collect", "Collector", "toList", "toSet", "groupingBy", "joining", "Stream"]
      },
      {
        "question": "Qu'est-ce qu'une méthode par défaut dans une interface ?",
        "textResponse": "Une méthode par défaut (default method) dans une interface possède une implémentation par défaut. Elle permet d'ajouter des comportements aux interfaces sans casser les classes existantes implémentant cette interface.",
        "keyWords": ["default method", "interface", "implémentation par défaut", "Java 8"]
      },
      {
        "question": "Comment fonctionne l'interface Functional ?",
        "textResponse": "Une interface fonctionnelle a exactement une méthode abstraite et peut être utilisée avec des expressions lambda et des références de méthode. Elle est annotée avec @FunctionalInterface pour garantir sa conformité et faciliter la programmation fonctionnelle.",
        "keyWords": ["FunctionalInterface", "lambda", "méthode abstraite", "@FunctionalInterface", "Java 8"]
      },
      {
        "question": "Qu'est-ce que l'API CompletableFuture ?",
        "textResponse": "CompletableFuture est une API pour la programmation asynchrone et réactive. Elle permet de chaîner des opérations via thenApply(), thenAccept(), handle(), allOf(), anyOf() et d'exécuter des tâches non bloquantes avec gestion d'erreurs.",
        "keyWords": ["CompletableFuture", "asynchronous", "thenApply", "thenAccept", "handle", "allOf", "anyOf"]
      },
      {
        "question": "Expliquez les parallelStream() en Java.",
        "textResponse": "parallelStream() crée un Stream parallèle qui utilise le ForkJoinPool pour traiter les éléments simultanément sur plusieurs threads. Il améliore les performances sur des collections volumineuses mais nécessite de vérifier que les opérations sont thread-safe et sans effets de bord.",
        "keyWords": ["parallelStream", "Stream", "ForkJoinPool", "multithread", "thread-safe"]
      },
      {
        "question": "Comment fonctionne l'API Time introduite avec Java 8 ?",
        "textResponse": "L'API Time (java.time) introduit LocalDate, LocalTime, LocalDateTime, ZonedDateTime, Duration et Period. Elle est immutable, thread-safe et remplace les anciennes classes Date et Calendar, facilitant la manipulation des dates et heures avec une meilleure précision et lisibilité.",
        "keyWords": ["java.time", "LocalDate", "LocalTime", "LocalDateTime", "ZonedDateTime", "Duration", "Period", "immutable", "thread-safe"]
      }
      ,
      {
        "question": "Sur quelle version de Java tu as déjà travaillé ? Est-ce que tu connais les nouveautés au-delà de Java 7 et 8 ?",
        "textResponse": "J’ai travaillé sur Java 8, 11 et 17. Au-delà de Java 8, il y a eu Java 9 avec les modules (Jigsaw), Java 11 avec l’API HTTP Client et Java 17 avec les sealed classes, records et pattern matching pour `instanceof`.",
        "keyWords": ["Java 8", "Java 11", "Java 17", "Jigsaw", "sealed classes", "records"]
      },
      {
        "question": "Est-ce que les Records et les Streams dans Java te parlent ?",
        "textResponse": "Oui, les records (introduits en Java 16) sont des classes immuables destinées à représenter des données. Les streams (Java 8) permettent de manipuler des collections de manière fonctionnelle avec des opérations comme filter, map, reduce.",
        "keyWords": ["records", "streams", "Java", "immutabilité", "programmation fonctionnelle"]
      },
      {
        "question": "Est-ce que tu as déjà de l’asynchrone ?",
        "textResponse": "Oui, j’ai utilisé l’asynchrone en Java avec `CompletableFuture` et avec Spring WebFlux pour des flux réactifs. Cela permet de gérer des traitements non bloquants et d’améliorer la scalabilité.",
        "keyWords": ["asynchrone", "CompletableFuture", "Spring WebFlux", "non bloquant", "scalabilité"]
      },
      {
        "question": "Est-ce que les classes Flux et Mono te parlent ?",
        "textResponse": "Oui, ce sont des classes de Project Reactor utilisées dans Spring WebFlux. Mono représente un flux contenant zéro ou un élément, tandis que Flux représente un flux contenant plusieurs éléments. Elles permettent de manipuler des données en mode réactif et asynchrone.",
        "keyWords": ["Flux", "Mono", "Spring WebFlux", "Project Reactor", "réactif", "asynchrone"]
      }
    ]
  },

    {
      "topic": "API",
      "questions": [
        {
          "question": "Quelle est la différence entre SOAP et REST ?",
          "textResponse": "SOAP (Simple Object Access Protocol) est un protocole basé sur XML qui impose une structure stricte pour l’échange de messages, avec un contrat WSDL. Il est souvent utilisé dans des environnements d’entreprise nécessitant sécurité, transactions ou fiabilité. REST (Representational State Transfer) est un style architectural plus léger, basé sur HTTP et utilisant généralement JSON ou XML. REST est stateless, plus performant et adapté au web moderne, tandis que SOAP est plus lourd mais plus normé et robuste dans des contextes complexes.",
          "keyWords": ["SOAP", "REST", "XML", "WSDL", "JSON", "stateless", "HTTP"]
        },
        {
          "question": "Quels sont les verbes http les plus utilisés ? A quoi servent ils ?",
          "textResponse": "Les principaux verbes HTTP sont : GET (récupérer une ressource sans effet de modification), POST (créer une ressource), PUT (remplacer entièrement une ressource), PATCH (modifier partiellement une ressource), DELETE (supprimer une ressource). D’autres comme HEAD, OPTIONS et TRACE existent mais sont moins utilisés. Ces verbes sont au cœur des API REST et garantissent la sémantique des opérations CRUD.",
          "keyWords": ["GET", "POST", "PUT", "PATCH", "DELETE", "HTTP verbs", "CRUD"]
        },
        {
          "question": "Quelle est la différence entre Put et Patch ?",
          "textResponse": "PUT et PATCH sont deux verbes HTTP utilisés pour la mise à jour de ressources. PUT remplace entièrement la ressource avec la nouvelle représentation envoyée dans la requête. Si certains champs sont omis, ils seront écrasés ou mis à null. PATCH permet une mise à jour partielle : seuls les champs transmis dans la requête sont modifiés, le reste reste inchangé. PATCH est donc plus efficace et flexible dans les mises à jour partielles.",
          "keyWords": ["PUT", "PATCH", "mise à jour", "remplacement complet", "mise à jour partielle"]
        },
        {
          "question": "Quels sont les paramètres pris dans « Delete » ? Est-ce qu’il peut prendre un « body»",
          "textResponse": "Le verbe HTTP DELETE est destiné à supprimer une ressource identifiée par son URI. Par convention, il ne prend pas de corps (body), car l’URI suffit à identifier la ressource. Toutefois, certains frameworks ou APIs tolèrent un body pour transmettre des métadonnées, mais ce n’est pas recommandé et souvent non supporté par les serveurs RESTful standards.",
          "keyWords": ["DELETE", "HTTP", "URI", "body", "RESTful"]
        },
        {
          "question": "Si tu devais faire des appels GET sur d’autres services comment tu utiliserais REST ? (REST template, Webclient, ...)",
          "textResponse": "Avec Spring, on peut utiliser RestTemplate (plus ancien) ou WebClient (plus moderne et réactif). RestTemplate est simple et synchrone, tandis que WebClient, introduit avec Spring WebFlux, permet des appels asynchrones et plus performants.",
          "keyWords": ["REST", "RestTemplate", "WebClient", "Spring WebFlux", "appel externe"]
        },
      ]
    },

    {
      "topic": "Spring",
      "questions": [{
        "question": "Comment on déclare un endpoint avec Spring ?",
        "textResponse": "Dans Spring Boot, un endpoint REST est déclaré dans une classe annotée avec @RestController ou @Controller. On utilise ensuite des annotations comme @GetMapping, @PostMapping, @PutMapping, @PatchMapping ou @DeleteMapping pour associer une méthode Java à un verbe HTTP et à un chemin URI. Les paramètres peuvent être injectés via @PathVariable, @RequestParam ou @RequestBody.",
        "keyWords": ["Spring Boot", "endpoint", "@RestController", "@GetMapping", "@PostMapping", "@RequestBody"]
      },
        {
          "question": "Le contrôleur appelle quelle couche ?",
          "textResponse": "Dans une architecture Spring Boot typique, le contrôleur (Controller) fait partie de la couche présentation. Il reçoit les requêtes HTTP et délègue le traitement à la couche Service, qui contient la logique métier. La couche Service communique ensuite avec la couche Repository pour l’accès aux données. Le contrôleur ne doit pas contenir de logique métier lourde, mais simplement orchestrer les appels.",
          "keyWords": ["Controller", "Service", "Repository", "architecture en couches", "logique métier"]
        },

        {
          "question": "C’est quoi l’injection des dépendances ?",
          "textResponse": "C’est un principe de l’IoC (Inversion of Control) où les dépendances d’une classe sont fournies par le framework (comme Spring), plutôt que créées directement par la classe. Cela facilite la maintenabilité, le test unitaire (mocking), et réduit le couplage fort.",
          "keyWords": ["IoC", "Spring", "DI", "découplage"]
        },
        {
          "question": "Est-ce que tu connais le framework OAuth ?",
          "textResponse": "Oui, OAuth est un protocole d’autorisation permettant à une application d’accéder à des ressources protégées au nom d’un utilisateur, sans exposer ses identifiants. En pratique, il est utilisé avec OpenID Connect pour la gestion d’authentification dans des architectures microservices ou des API sécurisées.",
          "keyWords": ["OAuth", "autorisation", "API sécurisée", "OpenID Connect"]
        },
        {
          "question": "C’est quoi la différence entre lazy et eager (JPA/Hibernate) ?",
          "textResponse": "Lazy loading charge les entités uniquement quand elles sont réellement accédées, ce qui évite des requêtes inutiles. Eager loading charge toutes les relations dès le départ, ce qui peut provoquer un surcoût en mémoire et en temps si les données ne sont pas toujours utilisées.",
          "keyWords": ["Lazy", "Eager", "Hibernate", "JPA", "performance"]
        },
        {
          "question": "C’est quoi la meilleure pratique pour gérer les transactions avec la base de données dans Spring ?",
          "textResponse": "On utilise l’annotation `@Transactional` pour définir les frontières transactionnelles. Cela permet d’assurer atomicité, rollback automatique en cas d’exception, et cohérence des données. Il est conseillé de placer cette annotation au niveau du service plutôt que du repository.",
          "keyWords": ["@Transactional", "Spring", "transactions", "rollback"]
        },
        {
          "question": "Est-ce que tu es sensibilisé à la sécurité ?",
          "textResponse": "Oui, j’applique régulièrement les bonnes pratiques de sécurité : validation des entrées, chiffrement des données sensibles, gestion des droits via Spring Security, et mise à jour des dépendances pour corriger les failles connues.",
          "keyWords": ["sécurité", "validation", "chiffrement", "Spring Security", "mises à jour"]
        },
        {
          "question": "Est-ce que le problème du log4J te dit quelque chose ?",
          "textResponse": "Oui, la faille Log4Shell (CVE-2021-44228) dans Log4J permettait une exécution de code à distance via des logs malveillants. Elle a été critique car Log4J est très répandu. Les mesures ont été la mise à jour immédiate vers une version corrigée et l’application de règles de filtrage.",
          "keyWords": ["Log4J", "Log4Shell", "CVE-2021-44228", "faille", "sécurité", "mise à jour"]
        }
        ,

        {
          "question": "Comment structurez-vous un projet Spring Boot en microservices ?",
          "textResponse": "Un projet Spring Boot en microservices est structuré avec des services indépendants, chacun avec son propre repository, service, contrôleur et configuration. On utilise souvent Spring Cloud pour le discovery, la configuration centralisée et la résilience, et Docker/Kubernetes pour le déploiement.",
          "keyWords": ["Spring Boot", "microservices", "repository", "service", "contrôleur", "Spring Cloud", "Docker", "Kubernetes"]
        },
        {
          "question": "Comment gérez-vous la résilience dans un microservice ?",
          "textResponse": "La résilience est gérée via des patterns comme Circuit Breaker, Retry, Rate Limiting, et Bulkhead. Spring Cloud Resilience4j ou Hystrix permettent de protéger les services contre les pannes et d’assurer une dégradation contrôlée.",
          "keyWords": ["résilience", "Circuit Breaker", "Retry", "Rate Limiting", "Bulkhead", "Resilience4j", "Hystrix"]
        },
        {
          "question": "Comment gérez-vous les erreurs dans un microservice Spring Boot exposant des API REST ?",
          "textResponse": "Les erreurs sont gérées via @ControllerAdvice et @ExceptionHandler pour centraliser le traitement des exceptions. On renvoie des ResponseEntity avec code HTTP approprié et payload standardisé pour faciliter la compréhension côté client.",
          "keyWords": ["Spring Boot", "API REST", "@ControllerAdvice", "@ExceptionHandler", "ResponseEntity", "HTTP code"]
        },
        {
          "question": "Quelle approche utilisez-vous pour sécuriser vos APIs REST (auth/authz) ?",
          "textResponse": "La sécurisation se fait avec Spring Security, JWT ou OAuth2. L’authentification vérifie l’identité de l’utilisateur, l’autorisation contrôle l’accès aux ressources. On peut utiliser des filtres et des annotations @PreAuthorize pour renforcer la sécurité.",
          "keyWords": ["Spring Security", "JWT", "OAuth2", "authentification", "autorisation", "@PreAuthorize"]
        },
        {
          "question": "Pour toi c’est quoi la différence Spring et Spring Boot ?",
          "textResponse": "Spring est le framework de base qui fournit des briques comme l’IoC, AOP, et la gestion des beans. Spring Boot est une surcouche qui simplifie la configuration avec des starters, de l’auto-configuration, et un serveur embarqué (Tomcat/Jetty). En résumé : Spring est la boîte à outils, Spring Boot est la version clé en main.",
          "keyWords": ["Spring", "Spring Boot", "IoC", "auto-configuration", "starter", "serveur embarqué"]
        },
        {
          "question": "Quelle version de Spring Boot tu as déjà utilisé ?",
          "textResponse": "J’ai utilisé principalement Spring Boot 2.x et 3.x selon les projets. La version 3 apporte notamment le support natif de Jakarta EE et l’optimisation pour Java 17.",
          "keyWords": ["Spring Boot 2", "Spring Boot 3", "Jakarta EE", "Java 17"]
        },
        {
          "question": "Sur les API, est ce que tu as déjà implémenté des API Rest ? Est-ce que tu utilisais une sécurité et si oui laquelle ?",
          "textResponse": "Oui, j’ai implémenté plusieurs API REST avec Spring Boot. Pour la sécurité, j’ai utilisé Spring Security avec OAuth2 et JWT pour gérer l’authentification et l’autorisation. Cela permet de sécuriser les endpoints et de définir des règles d’accès basées sur les rôles ou les claims du token.",
          "keyWords": ["REST", "Spring Security", "OAuth2", "JWT", "authentification", "autorisation"]
        },
        {
          "question": "Est-ce que tu peux me parler des projets Spring que tu as déjà utilisé ? Exemple: SpringData, ...",
          "textResponse": "J’ai utilisé Spring Boot pour structurer mes applications, Spring Data JPA pour l’accès aux données, Spring Security pour la sécurisation, Spring Cloud pour la communication entre microservices, et Spring Batch pour le traitement de gros volumes de données.",
          "keyWords": ["Spring Boot", "Spring Data JPA", "Spring Security", "Spring Cloud", "Spring Batch"]
        },
        {
          "question": "Est-ce que tu as déjà fait du JPA ? Si oui dans quel but ?",
          "textResponse": "Oui, j’ai utilisé JPA pour gérer la persistance des données avec une approche orientée objet. Cela me permet de manipuler les entités sans écrire directement des requêtes SQL, grâce aux annotations et au mapping objet-relationnel.",
          "keyWords": ["JPA", "persistance", "ORM", "entités", "base de données"]
        },
        {
          "question": "C’est quoi la différence entre JPA et Hibernate ?",
          "textResponse": "JPA est une spécification (un standard) définissant comment gérer la persistance des données en Java. Hibernate est une implémentation concrète de JPA. En résumé, JPA est l’interface, et Hibernate est une des librairies qui l’implémente.",
          "keyWords": ["JPA", "Hibernate", "spécification", "implémentation", "ORM"]
        },
        {
          "question": "Est-ce que tu pourrais me citer les annotations que tu as le plus utilisées sur Spring Boot ? Peux définir leur utilité ?",
          "textResponse": "Oui, j’ai beaucoup utilisé : @RestController (expose des endpoints REST), @Service (composant métier), @Repository (accès aux données), @Autowired (injection de dépendances), @Entity (mapping ORM), @SpringBootApplication (point d’entrée de l’application). Chacune structure clairement le rôle d’une classe dans l’architecture.",
          "keyWords": ["@RestController", "@Service", "@Repository", "@Autowired", "@Entity", "@SpringBootApplication"]
        },
      ]
    },

    {
      "topic": "Angular",
      "questions": [
        {
          "question": "Qu’est-ce que le ChangeDetectionStrategy.OnPush ?",
          "textResponse": "ChangeDetectionStrategy.OnPush optimise la détection de changements dans Angular en ne vérifiant les composants que lorsque leurs inputs changent ou lorsqu’un événement est émis depuis le composant. Cela améliore les performances, réduit le rendu inutile et est particulièrement utile pour les applications complexes.",
          "keyWords": ["ChangeDetectionStrategy.OnPush", "Angular", "performance", "inputs", "détection de changements"]
        },
        {
          "question": "Comment fonctionne la gestion d’état avec NgRx ?",
          "textResponse": "NgRx implémente Redux pour Angular, centralisant l’état de l’application dans un store immuable. Les composants déclenchent des actions, les reducers mettent à jour l’état, et les sélecteurs permettent de récupérer des morceaux de l’état. Les effets (Effects) gèrent les opérations asynchrones et les interactions externes.",
          "keyWords": ["NgRx", "Redux", "store", "actions", "reducers", "selectors", "Effects", "asynchronous"]
        },
        {
          "question": "Quelle est la différence entre Subject, BehaviorSubject, et ReplaySubject dans RxJS ?",
          "textResponse": "Subject est un observable multicast simple. BehaviorSubject émet la dernière valeur à chaque nouvel abonné et nécessite une valeur initiale. ReplaySubject émet un nombre défini de valeurs précédentes à chaque nouvel abonné. Chacun sert à gérer différents cas de partage et de replay des données.",
          "keyWords": ["Subject", "BehaviorSubject", "ReplaySubject", "RxJS", "multicast", "dernier valeur", "replay"]
        },
        {
          "question": "Comment sécuriser une application Angular avec JWT ?",
          "textResponse": "On sécurise Angular avec JWT en stockant le token de manière sécurisée (localStorage ou sessionStorage), en l’incluant dans les headers Authorization via HttpInterceptor, et en validant côté serveur. Le refresh token permet de maintenir la session sans demander les identifiants à chaque fois.",
          "keyWords": ["JWT", "Angular", "HttpInterceptor", "Authorization header", "refresh token", "security"]
        },
        {
          "question": "À quoi sert trackBy dans une boucle *ngFor ?",
          "textResponse": "trackBy permet d’optimiser le rendu des listes en identifiant chaque élément par une clé unique. Angular ne recrée que les éléments qui ont changé, améliorant ainsi les performances et réduisant les manipulations DOM inutiles.",
          "keyWords": ["trackBy", "*ngFor", "performance", "key", "DOM", "Angular"]
        },
        {
          "question": "Qu'est-ce qu’un Observable ?",
          "textResponse": "Un Observable est un objet représentant un flux de données asynchrones qui peut émettre zéro, une ou plusieurs valeurs. Les abonnés (subscribe) reçoivent ces valeurs au fur et à mesure, et les Observables supportent des opérations de transformation et de combinaison via RxJS.",
          "keyWords": ["Observable", "asynchronous", "flux de données", "subscribe", "RxJS"]
        },
        {
          "question": "Différence entre une Promise et un Observable",
          "textResponse": "Une Promise gère une seule valeur asynchrone, tandis qu’un Observable peut émettre plusieurs valeurs dans le temps. Les Observables sont lazy, cancellables et offrent des opérateurs puissants pour transformer et combiner les flux de données.",
          "keyWords": ["Promise", "Observable", "asynchronous", "lazy", "multiple values", "RxJS"]
        },
        {
          "question": "Quelle est la signature de la méthode subscribe() (paramètres et objets renvoyés) ?",
          "textResponse": "subscribe(next?: (value) => void, error?: (err) => void, complete?: () => void) permet de réagir aux émissions d’un Observable. Elle retourne un Subscription qui peut être utilisée pour se désabonner et éviter les fuites mémoire.",
          "keyWords": ["subscribe", "Observable", "next", "error", "complete", "Subscription", "RxJS"]
        },
        {
          "question": "Est-ce que la requête browser est envoyée au serveur si on ne fait pas le subscribe() ?",
          "textResponse": "Non, les Observables sont lazy par défaut. Sans subscribe(), aucun code asynchrone n’est exécuté et aucune requête HTTP via HttpClient n’est envoyée.",
          "keyWords": ["Observable", "lazy", "subscribe", "HttpClient", "Angular"]
        },
        {
          "question": "Différence entre let et var.",
          "textResponse": "var a une portée fonction et est hoisté, tandis que let a une portée bloc et n’est pas hoisté de la même façon. let permet d’éviter les collisions et comportements inattendus liés au scope.",
          "keyWords": ["var", "let", "scope", "hoisting", "block scope", "JavaScript"]
        },
        {
          "question": "Qu’est-ce que le callback ?",
          "textResponse": "Un callback est une fonction passée en paramètre à une autre fonction pour être exécutée après un événement ou une opération asynchrone. Il permet de gérer le flow asynchrone dans JavaScript et Angular.",
          "keyWords": ["callback", "function", "asynchronous", "JavaScript", "Angular"]
        },
        {
          "question": "Qu’est-ce que RxJs ?",
          "textResponse": "RxJS est une librairie pour la programmation réactive en JavaScript/TypeScript. Elle fournit Observables, opérateurs de transformation et de combinaison de flux, permettant de gérer facilement les événements asynchrones et le state management.",
          "keyWords": ["RxJS", "Observable", "reactive programming", "operators", "asynchronous"]
        },
        {
          "question": "Cycle de vie des composants ?",
          "textResponse": "Angular définit des hooks comme ngOnInit, ngOnChanges, ngDoCheck, ngAfterViewInit, ngAfterContentInit, ngOnDestroy pour gérer le cycle de vie des composants, permettant d’initialiser, vérifier et nettoyer les ressources de manière contrôlée.",
          "keyWords": ["Angular", "component lifecycle", "ngOnInit", "ngOnDestroy", "hooks"]
        },
        {
          "question": "Qu’est-ce que le Lazy loading ?",
          "textResponse": "Le Lazy loading charge les modules Angular uniquement lorsque nécessaire, réduisant le bundle initial et améliorant la performance. Il est configuré via le routing avec loadChildren et optimise les applications volumineuses.",
          "keyWords": ["Lazy loading", "Angular", "modules", "loadChildren", "performance"]
        },
        {
          "question": "Qu’est-ce que Redux ?",
          "textResponse": "Redux est un pattern de gestion d’état centralisé avec un store immuable, des actions pour déclencher des changements et des reducers pour appliquer les transformations. NgRx est l’implémentation Angular de Redux.",
          "keyWords": ["Redux", "store", "actions", "reducers", "state management", "NgRx"]
        },
        {
          "question": "Quelles sont les nouveautés importantes d’Angular 18 ?",
          "textResponse": "Angular 18 introduit des améliorations de performance, l’intégration stricte du TypeScript 5, des optimisations du rendu, des composants standalone améliorés, ainsi que des outils améliorés pour le testing et l’optimisation de build.",
          "keyWords": ["Angular 18", "performance", "TypeScript 5", "standalone components", "testing", "build optimization"]
        },
        {
          "question": "Comment gérez-vous l’architecture d’un gros projet Angular ?",
          "textResponse": "Pour un gros projet Angular, on utilise une architecture modulaire avec feature modules, shared modules, lazy loading, services injectables, state management via NgRx ou services singleton, et tests unitaires et e2e pour assurer maintenabilité et scalabilité.",
          "keyWords": ["Angular", "modular architecture", "feature modules", "shared modules", "lazy loading", "NgRx", "scalability"]
        },
        {
          "question": "Comment gérez-vous l’état complexe dans Angular ?",
          "textResponse": "L’état complexe est géré via NgRx ou des services singleton avec BehaviorSubject, combinant sélecteurs, effets et reducers pour assurer un flux unidirectionnel, la synchronisation des composants et la prévisibilité des changements.",
          "keyWords": ["state management", "NgRx", "BehaviorSubject", "selectors", "reducers", "effects", "unidirectional flow"]
        }
        ,
        {
          "question": "Comment testez-vous un composant Angular avec dépendances ?",
          "textResponse": "On utilise TestBed pour configurer le module de test, fournir les dépendances mockées via providers et utiliser async/await ou fakeAsync pour tester les composants avec observables. Les spies permettent de contrôler les appels de méthodes dépendantes.",
          "keyWords": ["TestBed", "Angular testing", "mock", "providers", "async", "fakeAsync", "spy"]
        }
      ]
    },

    {
      "topic": "Messagerie",
      "questions": [{
        "question": "Comment optimiser une requête qui prend du temps ?",
        "textResponse": "L’optimisation d’une requête lente peut passer par plusieurs approches : ajouter des indexes pertinents dans la base de données, utiliser la pagination pour limiter le volume de données, privilégier les jointures efficaces, réduire les fetch inutiles (Lazy Loading au lieu d’Eager), ou encore activer la mise en cache (1er et 2nd niveau avec JPA/Hibernate). Du côté applicatif, il est recommandé de profiler la requête avec EXPLAIN et d’éviter les N+1 queries.",
        "keyWords": ["optimisation requête", "index", "pagination", "Lazy Loading", "cache", "N+1 problem"]
      },
        {
          "question": "Est-ce que tu connais Kafka, si oui dans quelles conditions tu l’as utilisé ?",
          "textResponse": "Oui, Apache Kafka est une plateforme de streaming distribuée permettant la gestion d’événements en temps réel. Je l’ai utilisé pour la collecte et le traitement d’événements à grande échelle, comme la journalisation applicative, la communication inter-services (microservices), et la gestion de flux de données dans un système de détection de fraudes. Kafka est pertinent lorsque l’on a besoin de scalabilité, de tolérance aux pannes et de performance en traitement de messages.",
          "keyWords": ["Kafka", "streaming", "événements", "microservices", "scalabilité", "tolérance aux pannes"]
        },
        {
          "question": "Est-ce que tu as fait des développements autour des acteurs dans Kafka ?",
          "textResponse": "Dans Kafka, les acteurs principaux sont les Producers (qui publient des messages), les Consumers (qui consomment), les Brokers (qui stockent et distribuent), et les Topics (qui organisent les messages). J’ai développé des producers pour publier des événements métiers et des consumers pour traiter ces événements en quasi temps réel. J’ai aussi utilisé des Consumer Groups pour assurer la scalabilité et la répartition de charge.",
          "keyWords": ["Kafka", "Producer", "Consumer", "Broker", "Topic", "Consumer Group"]
        },
        {
          "question": "Est-ce que tu es déjà intervenu sur la gestion des événements dans Kafka ?",
          "textResponse": "Oui, la gestion des événements dans Kafka consiste à concevoir la structure des topics, définir des schémas de messages (souvent via Avro ou JSON), gérer les offsets pour assurer un traitement idempotent, et configurer la rétention des messages. J’ai mis en place des stratégies de retry, de gestion d’erreurs et des dead-letter topics afin d’assurer la robustesse du système de traitement des événements.",
          "keyWords": ["Kafka", "gestion événements", "topic", "offset", "idempotence", "dead-letter topic"]
        },]
    },

    {
      "topic": "DEVOPS",
      "questions": [
        {
          "question": "Sur la partie CI/CD vous utilisez quels outils ? si vous génériez des packages, vous le faisiez avec quel outil ?",
          "textResponse": "En CI/CD, on utilise souvent Jenkins, GitLab CI ou GitHub Actions pour automatiser les pipelines. Pour la génération de packages Java, on utilise Maven ou Gradle qui permettent aussi la gestion des dépendances et des tests.",
          "keyWords": ["CI/CD", "Jenkins", "Maven", "Gradle", "pipeline"]
        },
      ]
    },

    {
      "topic": "Testing",
      "questions": [{
        "question": "Au niveau du testing, qu'est-ce que tu mettais en place de ton côté ? Est-ce que tu faisais du TDD ?",
        "textResponse": "Oui, j’écrivais des tests unitaires avec JUnit et Mockito pour simuler les dépendances. Selon le contexte, j’ai appliqué TDD (écriture du test avant le code). Pour des tests d’intégration, Spring Boot propose `@SpringBootTest` pour démarrer le contexte.",
        "keyWords": ["JUnit", "Mockito", "TDD", "SpringBootTest", "tests unitaires"]
      }
        ,

        {
          "question": "Concernant les tests, peux-tu me parler des différents types de tests que tu as déjà fait ?",
          "textResponse": "J’ai travaillé sur plusieurs types de tests : les tests unitaires pour valider le comportement d’une méthode isolée, les tests d’intégration pour vérifier la cohérence entre plusieurs couches (exemple : service et repository), les tests end-to-end pour simuler des scénarios complets, et les tests de performance avec JMeter. Cette approche multi-niveaux permet de sécuriser le code et de limiter les régressions.",
          "keyWords": ["tests unitaires", "tests d’intégration", "end-to-end", "performance", "régression"]
        },
        {
          "question": "Est-ce que les tests sont utiles pour toi ?",
          "textResponse": "Oui, les tests sont essentiels. Ils garantissent la qualité du code, facilitent la maintenance, réduisent les bugs en production, et permettent d’avoir confiance lors des évolutions ou refactorings. Sans tests, chaque modification devient risquée.",
          "keyWords": ["qualité", "maintenance", "bugs", "refactoring", "production"]
        },
        {
          "question": "Dans tes missions, tu utilises quels outils pour les tests ?",
          "textResponse": "J’ai utilisé JUnit et Mockito pour les tests unitaires, Spring Test pour les tests d’intégration, Postman pour tester les API manuellement, et parfois Cucumber pour les tests BDD. Pour les tests de performance, JMeter a été utilisé.",
          "keyWords": ["JUnit", "Mockito", "Spring Test", "Postman", "Cucumber", "JMeter"]
        },
        {
          "question": "C’est quoi la différence entre un TU et TI ? C’est quoi la grosse différence entre les deux ?",
          "textResponse": "Un test unitaire (TU) teste une petite portion isolée du code, généralement une seule méthode, en se basant sur des mocks pour éviter les dépendances. Un test d’intégration (TI) vérifie que plusieurs composants fonctionnent correctement ensemble, par exemple le service et la base de données. La grosse différence réside dans la portée : isolation vs interaction.",
          "keyWords": ["TU", "TI", "isolation", "intégration", "dépendances"]
        },
        {
          "question": "Est-ce que tu as déjà travaillé avec Cucumber ? Quel autre outil de test tu as utilisé ?",
          "textResponse": "Oui, j’ai utilisé Cucumber pour faire du BDD, en écrivant les scénarios en langage Gherkin. J’ai aussi travaillé avec JUnit, Mockito, et Testcontainers pour les tests d’intégration utilisant une base embarquée.",
          "keyWords": ["Cucumber", "BDD", "Gherkin", "JUnit", "Mockito", "Testcontainers"]
        },


        {
          "question": "Est-ce que tu as déjà travaillé en TDD ? Si oui en quoi c’est utile ?",
          "textResponse": "Oui, le TDD consiste à écrire les tests avant le code. Cela force à bien définir le besoin, permet d’obtenir un code plus modulaire, et garantit une couverture de test optimale. L’utilité principale est d’avoir du code robuste et de limiter les régressions dès la phase de développement.",
          "keyWords": ["TDD", "tests", "modularité", "couverture", "robustesse"]
        },]
    },
    {
      "topic": "Others",
      "questions": [
        {
          "question": "Est-ce que tu as déjà fait du peer programming ?",
          "textResponse": "Oui, le peer programming consiste à développer à deux sur le même poste ou via un partage d’écran. Cela améliore la qualité du code, favorise la transmission de connaissances, et réduit le risque d’erreurs en bénéficiant de deux points de vue différents.",
          "keyWords": ["peer programming", "collaboration", "qualité du code", "pair programming"]
        },

        {
          "question": "Est-ce que tu as déjà travaillé en agile et si oui vous appliquiez quel rituel ?",
          "textResponse": "Oui, j’ai travaillé en méthodologie agile Scrum. Les rituels appliqués étaient les daily stand-up, sprint planning, sprint review et rétrospective. Nous utilisions également un board Kanban (Jira) pour suivre l’avancement des tâches.",
          "keyWords": ["Agile", "Scrum", "rituels", "daily", "sprint planning", "rétrospective", "Jira"]
        },


        {
          "question": "Est-ce que tu as déjà utilisé GIT et GITHUB ? Quelle est la différence entre les deux ?",
          "textResponse": "Oui. Git est un outil de gestion de versions distribué, installé localement pour gérer l’historique et les branches. GitHub est une plateforme en ligne qui héberge des dépôts Git et ajoute des fonctionnalités collaboratives comme pull requests, CI/CD, et gestion des issues.",
          "keyWords": ["Git", "GitHub", "gestion de versions", "branches", "pull request", "CI/CD"]
        },
        {
          "question": "Est-ce que tu fais de la veille ? Si oui à partir de quel support ?",
          "textResponse": "Oui, je fais de la veille technique en suivant Medium, DZone, les blogs officiels de Spring et Java, ainsi que des conférences en ligne. Je consulte aussi Stack Overflow et GitHub pour suivre les tendances et bonnes pratiques.",
          "keyWords": ["veille", "Medium", "DZone", "Spring blog", "Java blog", "Stack Overflow", "GitHub"]
        }]
    },
    {
      "topic": "SQL",
      "questions": []
    },
    {
      "topic": "...",
      "questions": []
    },


  ];


