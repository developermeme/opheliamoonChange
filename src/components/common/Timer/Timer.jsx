import FlipCountdown from '@rumess/react-flip-countdown';
import "./Timer.scss";

export const Timer = (props) => {
  const { endDate, size="extra-small", theme="light" } = props;
  return (
    <div className="counterHeaderTime" data-reactid="694">
    <FlipCountdown
        endAtZero
        hideYear
        hideMonth
        size={size}
        theme={theme}
        endAt={endDate}
        dayTitle='Days'
        hourTitle='Hours'
        minuteTitle='Minutes'
        secondTitle='Seconds'
        titlePosition='bottom' 
      />
    </div>
  );
};
