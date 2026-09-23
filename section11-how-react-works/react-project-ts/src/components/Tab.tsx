
type Props = {
  num: number
  activeTab: number
  onClick: (num: number) => void
}

function Tab({ num, activeTab, onClick }: Props) {

  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}

export default Tab