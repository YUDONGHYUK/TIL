module.exports = {
  parser: '@typescript-eslint/parser', // typescript-eslint/parsser를 eslint parser로 사용해야 한다고 지정
  parserOptions: {
    ecmaVersion: 2020, // 최신 ecmascript 기능의 구문 분석을 허용하는 ecmaVersion을 2020으로 지정
    sourceType: 'module', // sourceType은 import 사용을 허용하는 모듈
  },
  // configuration이 확장해야 하는 규칙 목록을 지정
  // ESLint가 우리가 설치한 3가지 플러그인의 규칙을 사용하도록 지시
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
  ],
  // rules 섹션에서는 몇 가지 사용자 정의 규칙이 추가되어 있다.
  rules: {
    'no-unused-vars': 'off', // 사용하지 않는 변수를 허용하지 않는다.
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off', // required statement에 대한 오류 해제
    'react/prop-types': 'off', // typescript를 사용하기 때문에 props 유형의 오류를 끈다.
    'react/jsx-uses-react': 'off', // 파일에서 react를 impot 하지 않으면 불평하는 ESLint 오류를 끈다.
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 타입 추론이 가능하기 때문에 return 타입이 명시적으로 지정되지 않은 경우 오류를 끈다.
  },
  settings: {
    react: {
      version: 'detect', // React 버전이 자동으로 감지되도록 설정
    },
  },
};
