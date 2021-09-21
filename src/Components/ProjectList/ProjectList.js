export default function ProjectList({dataList = [], isOrdered = false}) {
    if(isOrdered) {
        return (
                <ol className="project-list">
                    {dataList.length && dataList.map((listItem) => {
                        return (
                            <li key={listItem.length} dangerouslySetInnerHTML={{__html: listItem}} />
                        );
                    })}
                </ol>
        );
    }
    return (
            <ul className="project-list">
                {dataList.length && dataList.map((listItem) => {
                    return (
                        <li key={listItem.length} dangerouslySetInnerHTML={{__html: listItem}} />
                    );
                })}
            </ul>
    );
}